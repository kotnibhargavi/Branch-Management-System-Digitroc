import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  MenuItem,
  IconButton,
  Switch,
  FormControlLabel,
  Paper,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';

const BranchForm = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(true);
  const [bankAccounts, setBankAccounts] = useState([
    { accountNumber: '', holderName: '', ifscCode: '', bankName: '', branchName: '' }
  ]);

  const [formData, setFormData] = useState({
    // Branch Details
    branchCode: '',
    branchName: '',
    branchShortName: '',
    doorFlatHouseNo: '',
    street: '',
    locality: '',
    city: '',
    pincode: '',
    state: '',
    branchType: '',
    vehicleType: '',
    panNo: '',
    gstin: '',

    // Branch Contact Details
    contactNo: '',
    alternateContactNo: '',
    whatsappNumber: '',
    emailId: '',

    // Branch Incharge Details
    branchInchargeName: '',
    inchargeContactNo: '',
    inchargeAlternateContactNo: '',
    inchargeWhatsappNumber: '',
    inchargeEmailId: '',

    // Contact Person Details
    contactPersonName: '',
    contactPersonContactNo: '',
    contactPersonAlternateContactNo: '',
    contactPersonWhatsappNumber: '',
    contactPersonEmailId: '',

    // Opening Details
    openingBalance: '0',
    openingDate: null,

    // Advance Request Details
    minimumAmount: '0',
    maximumAmount: '0',
    monthlyMaximumAmount: '0',
    maximumUnAllocatedAmount: '0',
    effectiveDate: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBankAccountChange = (index, field, value) => {
    const newBankAccounts = [...bankAccounts];
    newBankAccounts[index][field] = value;
    setBankAccounts(newBankAccounts);
  };

  const addBankAccount = () => {
    setBankAccounts([
      ...bankAccounts,
      { accountNumber: '', holderName: '', ifscCode: '', bankName: '', branchName: '' }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, bankAccounts, status });
    navigate('/branches');
  };

  const handleDiscard = () => {
    navigate('/branches');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Manage Branch
      </Typography>
      <form onSubmit={handleSubmit}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            1. Branch Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                label="Branch Code"
                name="branchCode"
                value={formData.branchCode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                label="Branch Name"
                name="branchName"
                value={formData.branchName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                label="Branch Short Name"
                name="branchShortName"
                value={formData.branchShortName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Door/Flat/House No"
                name="doorFlatHouseNo"
                value={formData.doorFlatHouseNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Street"
                name="street"
                value={formData.street}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                label="Locality"
                name="locality"
                value={formData.locality}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                select
              >
                <MenuItem value="CHENNAI">CHENNAI</MenuItem>
                {/* Add more cities */}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                label="Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                select
              >
                <MenuItem value="TAMIL NADU">TAMIL NADU</MenuItem>
                {/* Add more states */}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="PAN No"
                name="panNo"
                value={formData.panNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="GSTIN"
                name="gstin"
                value={formData.gstin}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                label="Branch Type"
                name="branchType"
                value={formData.branchType}
                onChange={handleChange}
                select
              >
                <MenuItem value="Head Quarters">Head Quarters</MenuItem>
                <MenuItem value="Branch">Branch</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Vehicle Type"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                select
              >
                <MenuItem value="2 Wheeler">2 Wheeler</MenuItem>
                <MenuItem value="4 Wheeler">4 Wheeler</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            2. Branch Contact Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Contact No"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Alternate Contact No"
                name="alternateContactNo"
                value={formData.alternateContactNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Whatsapp Number"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Email Id"
                name="emailId"
                type="email"
                value={formData.emailId}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            3. Branch Incharge Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Branch Incharge Name"
                name="branchInchargeName"
                value={formData.branchInchargeName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Contact No"
                name="inchargeContactNo"
                value={formData.inchargeContactNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Alternate Contact No"
                name="inchargeAlternateContactNo"
                value={formData.inchargeAlternateContactNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Whatsapp Number"
                name="inchargeWhatsappNumber"
                value={formData.inchargeWhatsappNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Email Id"
                name="inchargeEmailId"
                type="email"
                value={formData.inchargeEmailId}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            4. Contact Person Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Contact Person Name"
                name="contactPersonName"
                value={formData.contactPersonName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Contact No"
                name="contactPersonContactNo"
                value={formData.contactPersonContactNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Alternate Contact No"
                name="contactPersonAlternateContactNo"
                value={formData.contactPersonAlternateContactNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Whatsapp Number"
                name="contactPersonWhatsappNumber"
                value={formData.contactPersonWhatsappNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Email Id"
                name="contactPersonEmailId"
                type="email"
                value={formData.contactPersonEmailId}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            5. Opening Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Opening Balance"
                name="openingBalance"
                type="number"
                value={formData.openingBalance}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Opening Date"
                  value={formData.openingDate}
                  onChange={(newValue) => {
                    setFormData(prev => ({ ...prev, openingDate: newValue }));
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            6. Advance Request Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Minimum Amount"
                name="minimumAmount"
                type="number"
                value={formData.minimumAmount}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Maximum Amount"
                name="maximumAmount"
                type="number"
                value={formData.maximumAmount}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Monthly Maximum Amount"
                name="monthlyMaximumAmount"
                type="number"
                value={formData.monthlyMaximumAmount}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Maximum UnAllocated Amount"
                name="maximumUnAllocatedAmount"
                type="number"
                value={formData.maximumUnAllocatedAmount}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Effective Date"
                  value={formData.effectiveDate}
                  onChange={(newValue) => {
                    setFormData(prev => ({ ...prev, effectiveDate: newValue }));
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            7. Bank Details
          </Typography>
          {bankAccounts.map((account, index) => (
            <Grid container spacing={3} key={index} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={2.4}>
                <TextField
                  fullWidth
                  label="Account Number"
                  value={account.accountNumber}
                  onChange={(e) => handleBankAccountChange(index, 'accountNumber', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={2.4}>
                <TextField
                  fullWidth
                  label="Account Holder Name"
                  value={account.holderName}
                  onChange={(e) => handleBankAccountChange(index, 'holderName', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={2.4}>
                <TextField
                  fullWidth
                  label="IFSC Code"
                  value={account.ifscCode}
                  onChange={(e) => handleBankAccountChange(index, 'ifscCode', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={2.4}>
                <TextField
                  fullWidth
                  label="Bank Name"
                  value={account.bankName}
                  onChange={(e) => handleBankAccountChange(index, 'bankName', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={2.4}>
                <TextField
                  fullWidth
                  label="Branch Name"
                  value={account.branchName}
                  onChange={(e) => handleBankAccountChange(index, 'branchName', e.target.value)}
                />
              </Grid>
            </Grid>
          ))}
          <IconButton onClick={addBankAccount} color="primary">
            <AddCircleIcon />
          </IconButton>
        </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <FormControlLabel
            control={
              <Switch
                checked={status}
                onChange={(e) => setStatus(e.target.checked)}
                color="primary"
              />
            }
            label="Status"
          />
          <Box>
            <Button
              variant="outlined"
              onClick={handleDiscard}
              sx={{ mr: 2 }}
            >
              Discard
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default BranchForm;

