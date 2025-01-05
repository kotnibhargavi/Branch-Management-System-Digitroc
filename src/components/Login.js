import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/contexts/AuthContext';

const Header = ({ onToggleSidebar }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
    handleClose();
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1, 
        backgroundColor: 'white',  // Change background color to white
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)'  // Optional: subtle shadow
      }}
    >
      <Toolbar sx={{ paddingRight: 2 }}> {/* You can adjust padding if necessary */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onToggleSidebar}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img
            src="https://digitrac.sundharams.com/images/logos/digitrac_full_logo.png"
            alt="DigiTrac"
            style={{ height: '40px' }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="subtitle1">{user?.username}</Typography>
          <IconButton
            onClick={handleProfileClick}
            size="small"
            sx={{ ml: 2 }}
          >
            <Avatar
              alt={user?.username}
              src="/placeholder.svg"
              sx={{ width: 32, height: 32 }}
            />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            className: 'profile-menu'
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
