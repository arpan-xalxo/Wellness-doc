// import React from 'react';
// import { Button, Typography, Container, Box } from '@mui/material';
// import { Link } from 'react-router-dom';

// const SignUp: React.FC = () => {
//   return (
//     <Container maxWidth="xs">
//       <Typography variant="h5" component="h1" gutterBottom>
//         Sign Up
//       </Typography>
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 2,
//           mt: 2,
//         }}
//       >
//         <Button
//           variant="contained"
//           color="primary"
//           component={Link}
//           to="/register/patient"  // Adjust the route accordingly
//           fullWidth
//         >
//           Sign Up for Patient
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           component={Link}
//           to="/register/doctor"  // Adjust the route accordingly
//           fullWidth
//         >
//           Sign Up for Doctor
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default SignUp;

import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import  Lottie  from 'lottie-react';
import NavbarHome from '../Components/Navbar_home';
import doctorAnimation from '../animation/doctor.json';
import patientAnimation from '../animation/patient.json';


const SignUp: React.FC = () => {
  return (
    <>
    <Box 
    sx={{
      background:"url('/image.png')",
      backgroundSize: "cover"
    }}
    >

    <NavbarHome />
    
    <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4, // Space between the boxes
          flexWrap: 'wrap',
        
        }}
      >
        {/* Sign Up Option 1 */}
        <Box
          sx={{
            width: 400, // Increased width
            height: 500, // Increased height
            borderRadius: 2,
            boxShadow: 4,
            p: 2,
            border: '1px solid #ccc',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Animation Placeholder */}
          <Box
            sx={{
             // Increased placeholder height
            
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
           <Lottie animationData={doctorAnimation} loop={true} style={{ height: '100%', width: '100%' }} />
          
          </Box>

          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/register/doctor"
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign Up for Doctor
          </Button>
        </Box>

        {/* Sign Up Option 2 */}
        <Box
          sx={{
            width: 400, // Increased width
            height: 500, // Increased height
            borderRadius: 2,
            boxShadow: 4,
            p: 2,
            border: '1px solid #ccc',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Animation Placeholder */}
          <Box
            sx={{
             
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >

<Lottie animationData={patientAnimation} loop={true} style={{ height: '100%', width: '100%' }} />
            
          </Box>

          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/register/patient"
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign Up for Patient
          </Button>
        </Box>
      </Box>
    </Container>
    </Box>
    </>
    
  );
};

export default SignUp;





