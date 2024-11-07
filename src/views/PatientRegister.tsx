import React from 'react';
import { Button, TextField, Typography, Container, Box } from '@mui/material';

const PatientRegister: React.FC = () => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h5" component="h1" gutterBottom>
        Patient Registration
      </Typography>
      <Box component="form" sx={{ mt: 1 }}>
        <TextField label="Name" variant="outlined" fullWidth margin="normal" required />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" type="email" required />
        <TextField label="Password" variant="outlined" fullWidth margin="normal" type="password" required />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default PatientRegister;
