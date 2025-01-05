import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your backend to handle the password reset
    alert('OTP sent to your mobile number');
    navigate('/login');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Forgot Password?
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Enter your username and mobile no. we'll send you OTP to reset your password
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="mobile"
            label="Mobile"
            type="tel"
            id="mobile"
            autoComplete="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send OTP
          </Button>
          <Link to="/login" variant="body2">
            Back to login
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;