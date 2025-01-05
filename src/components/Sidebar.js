import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
  Toolbar,
  Collapse,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const drawerWidth = 240;

const Sidebar = ({ open }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // State for managing the dropdown for 'Masters'
  const [openMasters, setOpenMasters] = useState(false);

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/dashboard' },
    {
      text: 'Masters',
      icon: <SettingsIcon />,
      path: '/masters', // Not used for navigation here
      submenu: [
        { text: 'Branches', path: '/branches' }, // Navigate to /branches
      ],
    },
    { text: 'Help', icon: <HelpIcon />, path: '/help' },
  ];

  const handleMastersClick = () => {
    setOpenMasters(!openMasters); // Toggle the Masters submenu
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#f8f9fa',
          borderRight: '1px solid #e0e0e0',
        },
      }}
      open={open}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto', mt: 2 }}>
        <List>
          {menuItems.map((item) => (
            <React.Fragment key={item.text}>
              {/* Main menu item */}
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={() => {
                    // If it's the "Masters" item, toggle the dropdown
                    if (item.submenu) {
                      handleMastersClick();
                    } else {
                      navigate(item.path);
                    }
                  }}
                  className={location.pathname === item.path ? 'sidebar-active' : ''}
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 2,
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                  {item.submenu && (openMasters ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />)}
                </ListItemButton>
              </ListItem>

              {/* Submenu for "Masters" */}
              {item.submenu && (
                <Collapse in={openMasters} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.submenu.map((subItem) => (
                      <ListItem
                        key={subItem.text}
                        button
                        sx={{ pl: 4 }}
                        onClick={() => navigate(subItem.path)}
                      >
                        <ListItemText primary={subItem.text} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
