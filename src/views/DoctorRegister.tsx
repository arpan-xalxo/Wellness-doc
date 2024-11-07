// import {
//     Avatar,
//     Box,
//     Button,
//     Container,
//     CssBaseline,
//     Grid,
//     TextField,
//     Typography,
//     Alert,
//   } from "@mui/material";
//   import { LockOutlined } from "@mui/icons-material";
//   import { useState } from "react";
//   import { Link, useNavigate } from "react-router-dom";
//   import useAuthContext from "../contexts/contextprovider";
  
//   const DoctorRegister = () => {
//     const [fullName, setFullName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [specialty, setSpecialty] = useState("");
//     const [licenseNumber, setLicenseNumber] = useState("");
//     const [practiceAddress, setPracticeAddress] = useState("");
//     const [experience, setExperience] = useState("");
//     const {  registerDoctor, errors } = useAuthContext(); 
//     const [successMessage, setSuccessMessage] = useState("");
//     const navigate = useNavigate();
  
//     const handleRegister = async (event: React.FormEvent) => {
//       event.preventDefault();

//       const success = await registerDoctor({
//         full_name:fullName,
//         email,
//         password,
//         phone_number:phoneNumber,
//         specialty,
//         license_number:licenseNumber,
//         practice_address:practiceAddress,
//         experience,
//       });
      
//       if (success) {
//         setSuccessMessage("Registration successful! Please verify your email.");
//         setTimeout(() => {
//           navigate("/login");
//         }, 3000); 
//       }
//     };
  
//     return (
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
//           <Typography variant="h5">Doctor Registration</Typography>
//           {successMessage && <Alert severity="success" sx={{ mt: 2 }}>{successMessage}</Alert>}
//           <Box sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="Full Name"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                 />
//                 {errors.name && (
//                   <div className="flex">
//                     <span className="text-red-200 text-sm m-2 p-2">
//                       {errors.name[0]}
//                     </span>
//                   </div>
//                 )}
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="Email Address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 {errors.email && (
//                   <div className="flex">
//                     <span className="text-red-200 text-sm m-2 p-2">
//                       {errors.email[0]}
//                     </span>
//                   </div>
//                 )}
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="Password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 {errors.password && (
//                   <div className="flex">
//                     <span className="text-red-200 text-sm m-2 p-2">
//                       {errors.password[0]}
//                     </span>
//                   </div>
//                 )}
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="Phone Number"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="Specialty"
//                   value={specialty}
//                   onChange={(e) => setSpecialty(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="Medical License Number"
//                   value={licenseNumber}
//                   onChange={(e) => setLicenseNumber(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="Practice Address"
//                   value={practiceAddress}
//                   onChange={(e) => setPracticeAddress(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="Years of Experience"
//                   type="number"
//                   value={experience}
//                   onChange={(e) => setExperience(e.target.value)}
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               onClick={handleRegister}
//             >
//               Register
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link to="/login">Already have an account? Login</Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     );
//   };
  
//   export default DoctorRegister;
  
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import useAuthContext from "../contexts/contextprovider"; // Use the context
import NavbarHome from '../Components/Navbar_home';
import doctorAnimation from '../animation/signupanimation.json';
import Lottie from 'lottie-react';

const SignUp = () => {
    const navigate = useNavigate();
    const { registerDoctor, errors } = useAuthContext(); // Access registerDoctor and errors from context
    const [successMessage, setSuccessMessage] = useState("");
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        specialty: '',
        licenseNumber: '',
        practiceAddress: '',
        experience: '',
    });

    const handleChange = (e: { target: { id: any; value: any; }; }) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        const success = await registerDoctor({
            full_name: formData.name,
            email: formData.email,
            password: formData.password,
            phone_number: formData.phone,
            specialty: formData.specialty,
            license_number: formData.licenseNumber,
            practice_address: formData.practiceAddress,
            experience: formData.experience,
        });
        
        if (success) {
            setSuccessMessage("Registration successful! Please verify your email.");
            setTimeout(() => navigate("/login"), 3000);
        }
    };

    // return (
    //     <div className="relative min-h-screen bg-gray-100">
    //         <div className="relative z-10">
    //             <NavbarHome />
    //         </div>

    //         <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/login1.png')" }}></div>
    //         <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 z-0"></div>

    //         <div className="relative flex items-center justify-center min-h-screen">
    //             <div className="bg-white bg-opacity-60 backdrop-blur-sm p-10 rounded-2xl shadow-2xl max-w-sm w-full transform transition duration-500 hover:scale-105">
    //                 <h2 className="text-2xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500">
    //                     Doctor Registration
    //                 </h2>
    //                 {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
    //                 <form className="space-y-4" onSubmit={handleSubmit}>
    //                     <div className="relative">
    //                         <label className="block text-gray-700 font-medium text-sm mb-2" htmlFor="name">Full Name</label>
    //                         <input
    //                             type="text"
    //                             id="name"
    //                             value={formData.name}
    //                             onChange={handleChange}
    //                             className="w-full p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 focus:outline-none text-sm"
    //                             placeholder="Enter your full name"
    //                         />
    //                         {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name[0]}</p>}
    //                     </div>
    //                     <div className="relative">
    //                         <label className="block text-gray-700 font-medium text-sm mb-2" htmlFor="password">Password</label>
    //                         <input
    //                             type="password"
    //                             id="password"
    //                             value={formData.password}
    //                             onChange={handleChange}
    //                             className="w-full p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 focus:outline-none text-sm"
    //                             placeholder="Create a password"
    //                         />
    //                     </div>

    //                     <div className="relative">
    //                         <label className="block text-gray-700 font-medium text-sm mb-2" htmlFor="phone">Phone Number</label>
    //                         <input
    //                             type="tel"
    //                             id="phone"
    //                             value={formData.phone}
    //                             onChange={handleChange}
    //                             className="w-full p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 focus:outline-none text-sm"
    //                             placeholder="Enter your phone number"
    //                         />
    //                     </div>
    //                     <div className="relative">
    //                         <label className="block text-gray-700 font-medium text-sm mb-2" htmlFor="specialty">Specialty</label>
    //                         <input
    //                             type="text"
    //                             id="specialty"
    //                             value={formData.specialty}
    //                             onChange={handleChange}
    //                             className="w-full p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 focus:outline-none text-sm"
    //                             placeholder="Enter your specialty"
    //                         />
    //                     </div>
    //                     <div className="relative">
    //                         <label className="block text-gray-700 font-medium text-sm mb-2" htmlFor="licenseNumber">Medical License Number</label>
    //                         <input
    //                             type="text"
    //                             id="licenseNumber"
    //                             value={formData.licenseNumber}
    //                             onChange={handleChange}
    //                             className="w-full p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 focus:outline-none text-sm"
    //                             placeholder="Enter your medical license number"
    //                         />
    //                     </div>
    //                     <div className="relative">
    //                         <label className="block text-gray-700 font-medium text-sm mb-2" htmlFor="practiceAddress">Practice Address</label>
    //                         <input
    //                             type="text"
    //                             id="practiceAddress"
    //                             value={formData.practiceAddress}
    //                             onChange={handleChange}
    //                             className="w-full p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 focus:outline-none text-sm"
    //                             placeholder="Enter your practice address"
    //                         />
    //                     </div>
    //                     <div className="relative">
    //                         <label className="block text-gray-700 font-medium text-sm mb-2" htmlFor="experience">Years of Experience</label>
    //                         <input
    //                             type="number"
    //                             id="experience"
    //                             value={formData.experience}
    //                             onChange={handleChange}
    //                             className="w-full p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 focus:outline-none text-sm"
    //                             placeholder="Enter your years of experience"
    //                         />
    //                     </div>

    //                     {/* Repeat the above block for other input fields, including email, password, phone, specialty, licenseNumber, practiceAddress, experience, with similar error handling */}

    //                     <button
    //                         type="submit"
    //                         className="w-full py-2 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-700 transition duration-300 transform focus:outline-none focus:ring-4 focus:ring-teal-300 text-sm"
    //                     >
    //                         Sign Up
    //                     </button>
    //                 </form>

    //                 <div className="mt-4 text-center text-sm">
    //                     Already have an account?{' '}
    //                     <Link to="/login" className="text-blue-500 hover:underline">
    //                         Log In
    //                     </Link>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
   
    return (
        <div className="relative min-h-screen bg-gray-100 overflow-hidden">
          {/* Navbar */}
          <div className="relative z-10">
            <NavbarHome />
          </div>
      
          {/* Background animation */}
          <div className="absolute inset-0 z-0">
            <Lottie animationData={doctorAnimation} loop={true} style={{ height: '100%', width: '100%' }} />
          </div>
      
          {/* Overlay for opacity effect */}
          <div className="absolute inset-0 bg-white opacity-70 z-0"></div>
      
          {/* Main content container */}
          <div className="relative z-20 flex items-center justify-center min-h-screen">
            <div
              className="bg-black bg-opacity-30 backdrop-blur-sm p-10 rounded-2xl shadow-2xl max-w-2xl w-full transform transition duration-500 text-2xl mt-10"
              style={{ maxHeight: '850px', overflowY: 'auto' }} // Scrollable container with max height
            >
              <h2 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-300 to-blue-100">
                Doctor Registration
              </h2>
              {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className='bg-gray-900 bg-opacity-30 rounded-xl'>
                  <div className='flex flex-row gap-6 p-8'>
                    <div className="relative -ml-6">
                      <label className="block text-gray-70 text-lg mb-2 text-white font-extrabold" htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-[275px] p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 focus:outline-none text-sm"
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name[0]}</p>}
                    </div>
                    <div className="relative">
                      <label className="block text-gray-70 text-lg mb-2 text-white font-extrabold" htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-[275px] p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 focus:outline-none text-sm"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
      
                  <div className='flex flex-row gap-6 p-8 -mt-5'>
                    <div className="relative -ml-6">
                      <label className="block text-gray-70 text-lg mb-2 text-white font-extrabold" htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-[275px] p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 focus:outline-none text-sm"
                        placeholder="Enter your email "
                      />
                    </div>
                    <div className="relative">
                      <label className="block text-gray-70 text-lg mb-2 text-white font-extrabold" htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-[275px] p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 focus:outline-none text-sm"
                        placeholder="Create a password"
                      />
                    </div>
                  </div>
                </div>
      
                <div className='flex flex-col gap-8 bg-gray-900 bg-opacity-30 rounded-xl p-6'>
                  <div className='flex flex-row gap-6'>
                    <div className="relative -ml-4">
                      <label className="block text-gray-70 text-lg mb-2 text-white font-extrabold" htmlFor="specialty">Specialty</label>
                      <input
                        type="text"
                        id="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                        className="w-[275px] p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 focus:outline-none text-sm"
                        placeholder="Enter your specialty"
                      />
                    </div>
                    <div className="relative">
                      <label className="block text-gray-70 text-lg mb-2 text-white font-extrabold" htmlFor="licenseNumber">Medical License Number</label>
                      <input
                        type="text"
                        id="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleChange}
                        className="w-[275px] p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 focus:outline-none text-sm"
                        placeholder="Enter your medical license number"
                      />
                    </div>
                  </div>
      
                  <div className="relative">
                    <label className="block text-gray-70 text-lg mb-2 text-white font-extrabold" htmlFor="experience">Years of Experience</label>
                    <input
                      type="number"
                      id="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 focus:outline-none text-sm"
                      placeholder="Enter your years of experience"
                    />
                  </div>
                </div>
      
                <div className="relative bg-gray-900 bg-opacity-30 rounded-xl p-4">
                  <label className="block text-gray-70 text-lg mb-2 text-white font-extrabold" htmlFor="practiceAddress">Practice Address</label>
                  <input
                    type="text"
                    id="practiceAddress"
                    value={formData.practiceAddress}
                    onChange={handleChange}
                    className="w-full p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 focus:outline-none text-sm"
                    placeholder="Enter your practice address"
                  />
                </div>
      
                <button
                  type="submit"
                  className="w-full py-2 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-700 transition duration-300 transform focus:outline-none focus:ring-4 focus:ring-teal-300 text-sm"
                >
                  Sign Up
                </button>
              </form>
      
              <div className="mt-4 text-center text-sm text-white">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
};

export default SignUp;

