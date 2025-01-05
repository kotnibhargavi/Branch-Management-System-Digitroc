import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box, Container } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'barath' && password === '12345') {
      localStorage.setItem('isAuthenticated', 'true');
      if (rememberMe) {
        localStorage.setItem('username', username);
      }
      login(username);
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/02/62/65/42/1000_F_262654251_bz9280VG76bCzXckAXs0oLVY3D7N95Wa.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: 'white',
          }}
        >
          <Typography component="h1" variant="h5">
            <img
              src="https://digitrac.sundharams.com/images/logos/digitrac_full_logo.png"
              alt="Logo"
              style={{ width: '150px', marginBottom: '10px' }}
            />
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
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Link to="/forgot-password" variant="body2">
              Forgot password?
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
