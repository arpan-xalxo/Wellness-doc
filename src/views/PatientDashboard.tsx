import React from 'react';
import DashboardNavbar from '../Components/DashboardNavbar';
import AppointmentTable from '../Components/Patientdashcomp/AppointmentTable';

const PatientDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <DashboardNavbar/>
        <AppointmentTable/>
    </div>
  );
}

export default PatientDashboard;