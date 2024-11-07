import React, { useEffect, useState } from 'react';
import { Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Chip } from '@mui/material';

import axiosClient from '../../axiosClient';

interface Appointment {
  doctorName: string;
  doctorImage: string;
  specification: string;
  location:string,
  status: 'Active' | 'Upcoming' | 'Completed';
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active':
      return '#4caf50'; // Green
    case 'Upcoming':
      return '#03a9f4'; // Blue
    case 'Completed':
      return '#9e9e9e'; // Grey
    default:
      return '#e0e0e0';
  }
};

const AppointmentTable: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

 
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axiosClient.get('/doctors'); // Assumes your API URL
        const doctorData = response.data.map((doctor: any) => ({
          doctorName: doctor.full_name,
          doctorImage: doctor.image_url || '/default-doctor.png', // Replace with actual field or default image
          specification: doctor.specialty,
          location:doctor.practice_address,
          status: 'Active'  // Update based on actual status if available
        }));
        setAppointments(doctorData);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <TableContainer sx={{ maxWidth: 700, backgroundColor: '#f8f9fa', borderRadius: 2, padding: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600 }}>
        Doctors Near you
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Doctor</TableCell>
            <TableCell>Specification</TableCell>
            <TableCell>Located</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment, index) => (
            <TableRow key={index}>
              <TableCell>
                <Avatar src={appointment.doctorImage} alt={appointment.doctorName} sx={{ marginRight: 2 }} />
                {appointment.doctorName}
              </TableCell>
              <TableCell>{appointment.specification}</TableCell>
              <TableCell>{appointment.location}</TableCell>
              <TableCell>
                <Chip
                  label={appointment.status}
                  color="default"
                  sx={{
                    color: '#fff',
                    backgroundColor: getStatusColor(appointment.status),
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppointmentTable;
