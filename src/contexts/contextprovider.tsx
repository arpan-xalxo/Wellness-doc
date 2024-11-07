
import axios from "axios";
import { createContext, useContext, useState, ReactNode, FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../axiosClient";

interface User {
  user_type: string;
  id: number;
  name: string;
  email: string;
}

interface Errors {
  name?:String[];
  email?: string[];
  password?: string[];
}

interface AuthContextType {
  user: User | null;
  errors: Errors;
  getUser: () => Promise<void>;
  getDoctor: () => Promise<void>;
  login: (data: { email: string; password: string, user_type: string }) => Promise<{ success: boolean; user_type?: string }>;
  register: (data: { email: string; password: string; name: string }) => Promise<boolean>;
  registerDoctor: (data: {
    full_name: string;
    email: string;
    password: string;
    phone_number: string;
    specialty: string;
    license_number: string;
    practice_address: string;
    experience: string;
  }) => Promise<boolean>; 
  logout:() => Promise<void>;
  verifyEmail: (token: string) => Promise<void>;
  csrf: () => Promise<void>;

}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();


  const csrf = async(): Promise<void> =>  await axios.get('/sanctum/csrf-cookie');

  const getUser = async () => { 
    console.log('fetching user');

    try {

      const { data } = await axiosClient.get('/user');
      console.log("User data:", data);

      setUser(data);


    
      
    } catch (error) {
      console.error('failed to fetch user' , error)
    }
   
  }

  const getDoctor = async () => { 
    console.log('fetching doctor');

    try {

      const { data } = await axiosClient.get('/doctor-user');
      console.log("Doctor data:", data);

      setUser(data);
      localStorage.setItem("doctor_user", JSON.stringify(data));
      
    } catch (error) {
      console.error('failed to fetch user' , error)
    }
   
  }


  /*
   * login for doctor and user/patient
   *
   */

  const login = async (data: { email: string; password: string; user_type: string }): Promise<{ success: boolean; user_type?: string }> => {
    await csrf();
    try {
        const response: any = await axiosClient.post('/login', { ...data });
        const { token, user_type } = response.data;

        // Store the token based on user type
        localStorage.setItem(user_type === "doctor" ? "doctor_webapp_token" : "webapp_token", token);

        // Conditional fetching based on user_type
        if (user_type === "doctor") {

            await getDoctor();
        } else if (user_type === "user") {

            await getUser();
        }

        return { success: true, user_type }; // Ensure this matches your expected return type.
    } catch (e: any) {
        if (e.response && e.response.status === 422) {
            setErrors(e.response.data.errors);
        }
        return { success: false }; // Ensure this matches your expected return type.
    }
};




  const register = async (data: { email: string; password: string; name: string }): Promise<boolean> => {
    await csrf();
    try {
      await axiosClient.post('/register', data);
      return true;
    } catch (e: any) {
      if (e.response && e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
      return false;
    }
  }

  const registerDoctor = async (data: {
    full_name: string;
    email: string;
    password: string;
    phone_number: string;
    specialty: string;
    license_number: string;
    practice_address: string;
    experience: string;
  }): Promise<boolean> => {
    await csrf(); 
    try {
     await axiosClient.post('/register-doctor', data);
      return true;
    } catch (e: any) {
      if (e.response && e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
      return false;
    }
  };
  

  const logout = async () => {

    try {
      await axiosClient.post("/logout");
      localStorage.removeItem("webapp_token");
      localStorage.removeItem("doctor_webapp_token");
      setUser(null);
       
      navigate("/"); 
    } catch (error) {
      
      console.error("Failed to log out", error);
    }
  };

  const verifyEmail = async (token: string) => {
  
    try {
      const response = await axiosClient.get('/verify/${token}');
      localStorage.setItem("webapp_token" , response.data.token);

      await getUser();
      navigate("/");

    } catch (error){

      console.error("Email Verification failed" , error);
      
    }
  };


  useEffect(() => {
    if (!user) {
      // Check for the specific token to determine the user type
      const doctorToken = localStorage.getItem("doctor_webapp_token");
      const userToken = localStorage.getItem("webapp_token");
  
      if (doctorToken) {
        console.log("Doctor token detected, calling getDoctor...");
        getDoctor();
      } else if (userToken) {
        console.log("User token detected, calling getUser...");
        getUser();
      } else {
        console.log("No tokens found, user is not authenticated.");
      }
    }
  }, [user , getDoctor , getUser]);



  


  return (
    <AuthContext.Provider value={{ user, errors, getUser,getDoctor , login, register , registerDoctor, logout, verifyEmail, csrf }}>
      {children}
    </AuthContext.Provider>
  );
}


export default function useAuthContext(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}
