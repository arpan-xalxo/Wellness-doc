import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box , Button, Container, CssBaseline, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react"
import useAuthContext from "../contexts/contextprovider";
import axiosClient from "../axiosClient";
import { Link, useLocation, useParams } from "react-router-dom";

const ResetPassword: React.FC = () => {
  const { search } = useLocation();
  const { token } = useParams<{ token: string }>();
  
  const [errors , setErrors] = useState<any>({});
  const [status , setStatus] = useState(null);
  const [password , setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
 

  const { csrf } = useAuthContext();

useEffect(() => {
    const params = new URLSearchParams(search);
    const email = params.get('email');

    console.log("Email:", email);
    console.log("Token:", token);
  }, [search, token]);



const resetPassword = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();  
  await csrf();
  setErrors({});
  setStatus(null);

  try {
    const params = new URLSearchParams(search);
    const email = params.get('email');
    const response =  await axiosClient.post("/reset-password" 
        , {
        email:email ,
        token ,
        password,
        password_confirmation: passwordConfirmation   });
    
    console.log(response); 

    setStatus(response.data.status)
  } 
  catch (e: any) {
    if (e.response && e.response.status === 422) {

      setErrors(e.response.data.errors);

    } else if (e.response && e.response.status === 404) {

      setErrors({ general: "User not found" });

    }
  }
}

    return (
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        height: '50vh',
        alignItems: 'center',
       
      }}
    >
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Reset your password </Typography>
          
          <Box sx={{ mt: 1 }}>
          
            
 <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="passwordConfirmation"
              label="Confirm Password"
              name="password"
               type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            
            />
          
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={resetPassword}
            >
              Reset Password
            </Button>

            {errors.general && (
              <Typography color="error" sx={{ mt: 2 }}>
                {errors.general}
              </Typography>
            )}

            {status && (
        <Typography
          style={{
            color: 'green',
            margin: '1px',
            padding: 'px', 
          }}
        >
          {status}
          <Typography
           style={{
            color: 'black',
            margin: '1px',
            padding: 'px', 
          }}
          >

          <Link to = "/login">Login</Link>

          </Typography>
          
        </Typography>
      )}
  
          </Box>
        </Box>
      </Container>
    </Box>
    );
};

export default ResetPassword;