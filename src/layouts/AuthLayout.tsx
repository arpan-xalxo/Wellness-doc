import React, { useEffect, useState } from 'react';

import useAuthContext from '../contexts/contextprovider'; // Assuming your auth context

import { Navigate, Outlet } from 'react-router-dom';



const AuthLayout: React.FC = () => {
  const { user , getDoctor , getUser } = useAuthContext(); // Assuming `user` and `logout` are provided by context
   

  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchUser = async () => {
      if (!user) {
        const doctorToken = localStorage.getItem("doctor_webapp_token");
        const userToken = localStorage.getItem("webapp_token");

        if (doctorToken) {
          await getDoctor();
        } else if (userToken) {
          await getUser();
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, [user, getDoctor, getUser]);

  if (loading) return <div>Loading...</div>; // Temporary loading indicator


  return user ?  (
    <>
   
    <Outlet/>
    </>
   
  ): <Navigate to = "/"/>
};

export default AuthLayout;
