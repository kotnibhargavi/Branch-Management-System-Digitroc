import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';




const drawerWidth = 50; 

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header onToggleSidebar={handleToggleSidebar} />
      <Sidebar open={sidebarOpen} onClose={handleToggleSidebar} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginLeft: { sm: `${drawerWidth}px` },
          marginTop: '64px', 
        }}
      >
          <Outlet />
        </Box>
      </Box>
    
     

  );
};

export default MainLayout;

