import React, { useState } from 'react';
import { Typography, Grid, Paper, Box, FormControl, Select, MenuItem, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { Card, CardContent } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import VerifiedIcon from '@mui/icons-material/Verified';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CancelIcon from '@mui/icons-material/Cancel';

const Dashboard = () => {
  const [branch, setBranch] = useState('All');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const stats = [
    {
      label: 'Coupon Requested',
      value: 0,
      gradient: 'linear-gradient(135deg, #2196F3, #E3F2FD)',
      icon: <AccountBalanceWalletIcon fontSize="large" />,
    },
    {
      label: 'Coupon Approved',
      value: 0,
      gradient: 'linear-gradient(135deg, #4CAF50, #C8E6C9)',
      icon: <VerifiedIcon fontSize="large" />,
    },
    {
      label: 'Coupon Generated',
      value: 0,
      gradient: 'linear-gradient(135deg, #FF5722, #FFCCBC)',
      icon: <AddCircleIcon fontSize="large" />,
    },
    {
      label: 'Coupon Utilized',
      value: 0,
      gradient: 'linear-gradient(135deg, #FFC107, #FFF9C4)',
      icon: <CheckCircleIcon fontSize="large" />,
    },
    {
      label: 'Coupon InProgress',
      value: 0,
      gradient: 'linear-gradient(135deg, #673AB7, #D1C4E9)',
      icon: <HourglassEmptyIcon fontSize="large" />,
    },
    {
      label: 'Coupon Cancelled',
      value: 0,
      gradient: 'linear-gradient(135deg, #F44336, #FFCDD2)',
      icon: <CancelIcon fontSize="large" />,
    },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ flexGrow: 1, p: 3, mt: 10 }}>
        {/* Header Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4">
            <img
              src="https://digitrac.sundharams.com/images/logos/digitrac_full_logo.png"
              alt="Logo"
              style={{ width: '150px', marginBottom: '10px' }}
            />
          </Typography>
          <Box display="flex" gap={2}>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <Select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Branch' }}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="SPL - CORPORATE">SPL - CORPORATE</MenuItem>
                <MenuItem value="CHENNAI">CHENNAI</MenuItem>
              </Select>
            </FormControl>
            <DatePicker
              label="From Date"
              value={fromDate}
              onChange={(newValue) => setFromDate(newValue)}
              renderInput={(params) => <TextField {...params} size="small" />}
            />
            <DatePicker
              label="To Date"
              value={toDate}
              onChange={(newValue) => setToDate(newValue)}
              renderInput={(params) => <TextField {...params} size="small" />}
            />
          </Box>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3}>
          {stats.map((stat) => (
            <Grid item xs={12} sm={6} md={4} key={stat.label}>
              <Card
                sx={{
                  background: stat.gradient,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 2,
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {stat.label}
                  </Typography>
                  <Typography variant="h4">{stat.value}</Typography>
                </CardContent>
                {stat.icon}
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* PFS Wise Consumption */}
        <Paper sx={{ p: 2, mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            PFS Wise Consumption
          </Typography>
          <Typography variant="h4">0 Ltrs</Typography>
        </Paper>
      </Box>
    </LocalizationProvider>
  );
};

export default Dashboard;
