
// import { LockOutlined } from "@mui/icons-material";
// import {
//   Container,
//   CssBaseline,
//   Box,
//   Avatar,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Alert,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import useAuthContext from "../contexts/contextprovider";

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Circles } from "react-loader-spinner";

// const Login = () => { 

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userType, setUserType] = useState("user"); // Default to "user"
//   const [successMessage, setSuccessMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { login, errors } = useAuthContext();
//   const navigate = useNavigate();

//   const handleLogin = async (event: { preventDefault: () => void }) => {
//     event.preventDefault();
//     setLoading(true);

//     // Call login function with userType included
//     const {success , user_type} = await login({ email, password, user_type: userType });

//     if (success) {
//       setSuccessMessage("Login Successfully");
//       setTimeout(() => {
//         if (user_type === "doctor") {
//           navigate("/doctor-dashboard"); 
//         } else {
//           navigate("/patient-dashboard"); 
//         }
//       }, 3000); 
//     } else {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "flex-start",
//         height: "50vh",
//         alignItems: "center",
//       }}
//     >
//       <Container maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             mt: 20,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
//             <LockOutlined />
//           </Avatar>
//           {successMessage && (
//             <Alert severity="success" sx={{ mt: 2 }}>
//               {successMessage}
//             </Alert>
//           )}
//           <Typography variant="h5">Login</Typography>

//           <Box sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoFocus
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && (
//               <div className="flex">
//                 <span className="text-red-200 text-sm m-2 p-2">
//                   {errors.email[0]}
//                 </span>
//               </div>
//             )}

//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="password"
//               name="password"
//               label="Password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && (
//               <span className="text-red-200 text-sm">
//                 {errors.password[0]}
//               </span>
//             )}

//             {/* Select for user type */}
//             <Select
//               value={userType}
//               onChange={(e) => setUserType(e.target.value)}
//               fullWidth
//               sx={{ mt: 2 }}
//             >
//               <MenuItem value="user">User</MenuItem>
//               <MenuItem value="doctor">Doctor</MenuItem>
//             </Select>

//             <Button
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               onClick={handleLogin}
//             >
//               Login
//             </Button>

//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link to="/signup-choice">Don't have an account? Register</Link>
//               </Grid>
//             </Grid>
//             <Grid container justifyContent="flex-end">
//               <Grid>
//                 <Link to="/forgot-password">Forgot Password</Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         {loading && (
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               position: "absolute",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               backgroundColor: "rgba(255, 255, 255, 0.8)",
//             }}
//           >
//             <Circles
//               height="80"
//               width="80"
//               color="#4fa94d"
//               ariaLabel="circles-loading"
//               visible={true}
//             />
//           </Box>
//         )}
//       </Container>
//     </Box>
//   );
// };

// export default Login;

import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
  Select,
  MenuItem,
} from "@mui/material";
import useAuthContext from "../contexts/contextprovider";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import NavbarHome from "../Components/Navbar_home";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("patient");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, errors } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setLoading(true);

    const { success, user_type } = await login({ email, password, user_type: userType });

    if (success) {
      setSuccessMessage("Login Successfully");
      setTimeout(() => {
        if (user_type === "doctor") {
          navigate("/doctor-dashboard");
        } else {
          navigate("/patient-dashboard");
        }
      }, 3000);
    } else {
      setLoading(false);
    }
  };

  return (
    <><NavbarHome /><Box sx={{ display: "flex", justifyContent: "center", minHeight: "100vh", alignItems: "center", background: "url('/login1.png')", backgroundSize: "cover" }}>

      <Container maxWidth='xs'>
        <CssBaseline />

        <Box
          sx={{
            mt: 8,
            p: 4,
            
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            borderRadius: 3,
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlined />
          </Avatar>
          {successMessage && (
            <Alert severity="success" sx={{ mt: 2 }}>
              {successMessage}
            </Alert>
          )}
          <Typography variant="h5" gutterBottom>
            Welcome Back
          </Typography>

          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            <Select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              fullWidth
              displayEmpty
              sx={{ mt: 2 }}
              required
            >
              <MenuItem value="" disabled>
                Are you a Doctor or Patient?
              </MenuItem>
              <MenuItem value="doctor">Doctor</MenuItem>
              <MenuItem value="patient">Patient</MenuItem>
            </Select>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            {errors.email && (
              <Alert severity="error" sx={{ mt: 1 }}>
                {errors.email[0]}
              </Alert>
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            {errors.password && (
              <Alert severity="error" sx={{ mt: 1 }}>
                {errors.password[0]}
              </Alert>
            )}

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Login
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signup-choice">Don't have an account? Register</Link>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/forgot-password">Forgot Password?</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <Circles height="80" width="80" color="#4fa94d" ariaLabel="circles-loading" visible={true} />
          </Box>
        )}
      </Container>
    </Box></>
  );


  // return (
  //   <><NavbarHome /><Box
  //     sx={{
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       minHeight: "100vh",
  //       backgroundImage: "url('/login1.png')",
  //       backgroundSize: "cover",
  //       backgroundPosition: "center",
  //       backgroundColor: "rgba(0,0,0,0.6)",
  //       backgroundBlendMode: "overlay",
  //     }}
  //   >
  //     <Container maxWidth="xs">
  //       <CssBaseline />
  //       <Box
  //         sx={{
  //           mt: 8,
  //           p: 4,
  //           backgroundColor: "rgba(255, 255, 255, 0.85)",
  //           borderRadius: 3,
  //           boxShadow: 5,
  //           textAlign: "center",
  //         }}
  //       >
  //         <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
  //           <LockOutlined />
  //         </Avatar>
  //         {successMessage && (
  //           <Alert severity="success" sx={{ mt: 2 }}>
  //             {successMessage}
  //           </Alert>
  //         )}
  //         <Typography variant="h5" sx={{ color: "primary.dark", fontWeight: "bold" }} gutterBottom>
  //           Welcome Back
  //         </Typography>

  //         <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
  //           <Select
  //             value={userType}
  //             onChange={(e) => setUserType(e.target.value)}
  //             fullWidth
  //             displayEmpty
  //             sx={{ mb: 2, bgcolor: "background.paper", borderRadius: 1 }}
  //             required
  //           >
  //             <MenuItem value="" disabled>
  //               Are you a Doctor or Patient?
  //             </MenuItem>
  //             <MenuItem value="doctor">Doctor</MenuItem>
  //             <MenuItem value="patient">Patient</MenuItem>
  //           </Select>

  //           <TextField
  //             margin="normal"
  //             required
  //             fullWidth
  //             id="email"
  //             label="Email Address"
  //             name="email"
  //             autoComplete="email"
  //             autoFocus
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //             sx={{ bgcolor: "background.paper", borderRadius: 1 }} />
  //           {errors.email && (
  //             <Alert severity="error" sx={{ mt: 1 }}>
  //               {errors.email[0]}
  //             </Alert>
  //           )}

  //           <TextField
  //             margin="normal"
  //             required
  //             fullWidth
  //             name="password"
  //             label="Password"
  //             type="password"
  //             id="password"
  //             autoComplete="current-password"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //             sx={{ bgcolor: "background.paper", borderRadius: 1 }} />
  //           {errors.password && (
  //             <Alert severity="error" sx={{ mt: 1 }}>
  //               {errors.password[0]}
  //             </Alert>
  //           )}

  //           <Button
  //             type="submit"
  //             fullWidth
  //             variant="contained"
  //             sx={{
  //               mt: 3,
  //               mb: 2,
  //               fontWeight: "bold",
  //               color: "white",
  //               bgcolor: "primary.main",
  //               "&:hover": {
  //                 bgcolor: "primary.dark",
  //               },
  //             }}
  //           >
  //             Login
  //           </Button>

  //           <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
  //             <Grid item>
  //               <Link to="/signup-choice" style={{ color: "#1565C0", fontWeight: "bold" }}>
  //                 Don't have an account? Register
  //               </Link>
  //             </Grid>
  //           </Grid>
  //           <Grid container justifyContent="flex-end">
  //             <Grid item>
  //               <Link to="/forgot-password" style={{ color: "#1565C0", fontWeight: "bold" }}>
  //                 Forgot Password?
  //               </Link>
  //             </Grid>
  //           </Grid>
  //         </Box>
  //       </Box>
  //       {loading && (
  //         <Box
  //           sx={{
  //             display: "flex",
  //             justifyContent: "center",
  //             alignItems: "center",
  //             position: "absolute",
  //             top: 0,
  //             left: 0,
  //             right: 0,
  //             bottom: 0,
  //             backgroundColor: "rgba(255, 255, 255, 0.8)",
  //           }}
  //         >
  //           <Circles height="80" width="80" color="#1565C0" ariaLabel="circles-loading" visible={true} />
  //         </Box>
  //       )}
  //     </Container>
  //   </Box></>
  // );

};

export default Login;


