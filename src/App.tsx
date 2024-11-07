import { Route, Routes } from 'react-router-dom';
import './App.css';
import './tailwind.css'
import './Navigation.css';
import Login from './views/Login';
import Register from './views/Register';
import ForgotPassword from './views/ForgotPassword';
import Home from './views/Home';
import AuthLayout from './layouts/AuthLayout';
import GuestLayout from './layouts/GuestLayout';
import VerifySuccess from './views/VerifySuccess';
import ResetPassword from './views/ResetPassword';
import SignUp from './views/SignUp';
import DoctorRegister from './views/DoctorRegister';
import VerifyDoctorSuccess from './views/VerifyDoctorSuccess';
import DoctorDashboard from './views/DoctorDashboard';
import NotificationSystem from './Components/Doctordashcomp/NotificationSystem';
import SettingsComponent from './Components/Doctordashcomp/Setting';
import AppointmentScheduling from './Components/Doctordashcomp/AppointmentScheduling';
import PatientList from './Components/Patients/PatientList';
import MedicalReports from './Components/Doctordashcomp/MedicalReports';
import PatientDashboard from './views/PatientDashboard';

function App() {
  return (
    <>
      <Routes>
      
        {/* Guest Layout for non-authenticated pages */}
        <Route element={<GuestLayout />}>
        <Route path="/" element={<Home />} /> {/* Default homepage */}
          <Route path="/signup-choice" element={<SignUp />} /> {/* General SignUp */}
          <Route path="/register/doctor" element={<DoctorRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/patient" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          
        </Route>

        {/* AuthLayout for authenticated pages */}
        <Route element={<AuthLayout />}>
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/notification" element={<NotificationSystem />} />
          <Route path="/setting" element={<SettingsComponent />} />
          <Route path="/schedule" element={<AppointmentScheduling />} />
          <Route path="/patients" element={<PatientList />} />
          <Route path="/reports" element={<MedicalReports />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
        </Route>
       
        <Route path="/verify-success" element={<VerifySuccess />} />
        <Route path="/verify-doctor-success" element={<VerifyDoctorSuccess />} />
      
      </Routes>
    </>
  );
}

export default App;

