import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box , Button, Container, CssBaseline, TextField, Typography } from "@mui/material";
import React, { useState } from "react"
import useAuthContext from "../contexts/contextprovider";
import axiosClient from "../axiosClient";

const ForgotPassword: React.FC = () => {

  const [email , setEmail] = useState("");
  const [errors , setErrors] = useState<any>({});
  const [status , setStatus] = useState(null);
  const { csrf } = useAuthContext();


const handlePassword = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();  
  await csrf();
  setErrors({});
  setStatus(null);

  try {
    const response =  await axiosClient.post("/forgot-password" , {email});
    
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
          <Typography variant="h5">Forgot your password? Let us know your email address</Typography>
          
          <Box sx={{ mt: 1 }}>
          
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            
            />
          
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handlePassword}
            >
              Submit
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
        </Typography>
      )}
  
          </Box>
        </Box>
      </Container>
    </Box>
    );
};

export default ForgotPassword;