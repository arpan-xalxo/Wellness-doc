// import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
// import { motion } from 'framer-motion';
// import React from 'react';



// const Homepage: React.FC = () => {
//   return  (
    
//     <div>
     
//        {/* Welcome Section */}
//        <Box
//         sx={{
//           height: '100vh',
//           backgroundImage: 'url("/images/doctor-bg.jpg")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           position: 'relative',
//         }}
//       >
//         <Box
//           sx={{
//             height: '100%',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             flexDirection: 'column',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             textAlign: 'center',
//             color: '#fff',
//           }}
//         >
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
//             <Typography variant="h2" fontWeight="bold">
//               Welcome to MediCare
//             </Typography>
//           </motion.div>
//           <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
//             <Typography variant="h6" mt={2} mb={4}>
//               Providing quality healthcare for you and your family
//             </Typography>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.1 }}>
//             <Button href="#contact" variant="contained" color="primary">
//               Book Appointment
//             </Button>
//           </motion.div>
//         </Box>
//       </Box>

//       {/* Services Section */}
//       <Container sx={{ py: 8 }}>
//         <Typography variant="h4" textAlign="center" mb={4}>
//           Our Services
//         </Typography>
//         <Grid container spacing={4}>
//           <Grid item xs={12} sm={6} md={4}>
//             <motion.div whileHover={{ scale: 1.05 }}>
//               <Card>
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FRcAzJrzpwHpIQgXVWTItcOTXSoQt2P4pQ&s"
//                   alt="General Checkup"
//                 />
//                 <CardContent>
//                   <Typography variant="h5" component="div" gutterBottom>
//                     General Checkup
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Comprehensive health checkups for patients of all ages.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <motion.div whileHover={{ scale: 1.05 }}>
//               <Card>
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/pediatrician-baby-doctor-1296x728-header.jpg?w=1155&h=1528"
//                   alt="Pediatrics"
//                 />
//                 <CardContent>
//                   <Typography variant="h5" component="div" gutterBottom>
//                     Pediatrics
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Specialized care for infants, children, and adolescents.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <motion.div whileHover={{ scale: 1.05 }}>
//               <Card>
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image="https://artemiscardiac.com/speciality/65aa6649f0169Non%20Invasive%20Cardiology%20-%20Header%20Image.webp"
//                   alt="Cardiology"
//                 />
//                 <CardContent>
//                   <Typography variant="h5" component="div" gutterBottom>
//                     Cardiology
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Heart health services from experienced cardiologists.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* About Us Section */}
//       <Container sx={{ py: 8 }}>
//         <Typography variant="h4" textAlign="center" mb={4}>
//           About Us
//         </Typography>
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
//           <Typography variant="body1" textAlign="center" maxWidth="lg" mx="auto">
//             At MediCare, we are committed to providing the best healthcare services. Our dedicated team of professionals
//             is here to ensure your well-being with compassion and expertise.
//           </Typography>
//         </motion.div>
//       </Container>

//       {/* Contact Section */}
//       <Box sx={{ py: 8, backgroundColor: '#1976d2', color: '#fff' }} id="contact">
        
//           <Typography variant="h4" mb={4}>
//             Get in Touch
//           </Typography>
//           <Typography variant="body1" mb={4} maxWidth="md" mx="auto">
//             If you have any questions or would like to book an appointment, please don't hesitate to contact us.
//           </Typography>
//           <motion.div whileHover={{ scale: 1.1 }}>
//             <Button href="mailto:contact@medicare.com" variant="contained" color="secondary">
//               Email Us
//             </Button>
//           </motion.div>
      
//       </Box>

//       {/* Footer */}
//       <Box sx={{ backgroundColor: '#333', py: 2, color: '#fff' }}>
//         <Typography variant="body2" textAlign="center">
//           &copy; 2024 MediCare. All rights reserved.
//         </Typography>
//       </Box>
//     </div>
//   );
// };

// export default Homepage;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Navbar_home from './Navbar_home';
import Footer from './Footer';


interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: 'General Checkup',
    description: 'Comprehensive health checkups for patients of all ages.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FRcAzJrzpwHpIQgXVWTItcOTXSoQt2P4pQ&s'
  },
  {
    title: 'Pediatrics',
    description: 'Specialized care for infants, children, and adolescents.',
    image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/pediatrician-baby-doctor-1296x728-header.jpg?w=1155&h=1528'
  },
  {
    title: 'Cardiology',
    description: 'Heart health services from experienced cardiologists.',
    image: 'https://artemiscardiac.com/speciality/65aa6649f0169Non%20Invasive%20Cardiology%20-%20Header%20Image.webp'
  },
  {
    title: 'Dermatology',
    description: 'Skincare treatments for all skin types and conditions.',
    image: 'https://img.freepik.com/free-photo/dermatology-doctor-checking-young-woman-scalp-hair-during-appointment-clinic-diagnosing-hair-loss-health-care-hospital-consultation-with-dermatologist-examining-female-patient_482257-22841.jpg?w=2000'
  },
  {
    title: 'Orthopedics',
    description: 'Specialized in treating bone and joint disorders.',
    image: 'https://santhyahospitals.com/wp-content/uploads/2024/06/Top-listed-orthopedic-doctor-in-Chandigarh.png'
  },
  {
    title: 'Ophthalmology',
    description: 'Eye care treatments and vision correction procedures.',
    image: 'https://brighteyesmv.com/wp-content/uploads/eye-surgery-2012.jpg'
  },
  {
    title: 'Neurology',
    description: 'Care for neurological disorders and treatments.',
    image: 'https://www.umhs-sk.org/hubfs/What%20is%20a%20neurologist.jpeg'
  }
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const getCurrentSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      slides.push(services[(currentIndex + i) % services.length]);
    }
    return slides;
  };

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/image.png')" }}>
       

        <img
          src="/doc.png"
          alt="AI Chatbot"
          className="fixed bottom-5 right-5 h-16 w-16 rounded-full border-2 border-black cursor-pointer z-20 hover:scale-105 transform duration-300"
          onClick={toggleChat}
        />

        {isChatOpen && (
          <div className="fixed bottom-20 right-12 bg-white p-6 rounded-lg shadow-lg w-80 z-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Welcome to WellnessDoc Chat</h3>
            <p className="text-gray-600 mb-4">Please log in to start chatting.</p>
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-500 text-white px-4 py-2 rounded-full mb-2 w-full"
            >
              Log In
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="bg-gray-500 text-white px-4 py-2 rounded-full w-full"
            >
              Sign Up
            </button>
          </div>
        )}

        <motion.div
          className="home flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-white text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl font-bold mb-6 text-cyan-500 drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Welcome to WellnessDoc
          </motion.h1>

          <motion.p
            className="text-2xl mb-10 text-cyan-400 drop-shadow-md"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Providing quality healthcare for you and your family
          </motion.p>

          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            onClick={() => navigate('/login')}
          >
            Book an Appointment
          </motion.button>
        </motion.div>
      </div>

      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 text-cyan-600">Our Services</h2>
          <div className="relative">
            <motion.div
              key={currentIndex}
              className="flex justify-center items-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {getCurrentSlides().map((service, index) => (
                <div key={index} className="max-w-md p-6 bg-white shadow-lg rounded-lg hover:scale-105 transform duration-200">
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
                  <h3 className="text-2xl font-bold mb-2 text-cyan-800">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </motion.div>

            <div className="absolute top-1/2 left-5 transform -translate-y-1/2">
              <button
                onClick={prevSlide}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center shadow-md"
              >
                <FaLessThan />
              </button>
            </div>

            <div className="absolute top-1/2 right-5 transform -translate-y-1/2">
              <button
                onClick={nextSlide}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center shadow-md"
              >
                <FaGreaterThan />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="about-us" className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 text-cyan-600">About Us</h2>
          <p className="text-lg max-w-3xl mx-auto">
            WellnessDoc is a leading healthcare provider, committed to offering comprehensive medical services to individuals and families.
            With a focus on patient care, we combine expertise with cutting-edge technology to deliver the highest quality treatment.
          </p>
          <Link to="/about" className="text-lg text-blue-500 underline font-bold">Know More</Link>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-100 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-cyan-600">Contact Us</h2>
          <p className="text-lg mb-6">Have questions? Reach out to our friendly team today!</p>
          <Link to="/contact" className="text-lg text-blue-500 underline font-bold">Contact Us</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
