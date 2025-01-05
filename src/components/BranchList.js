import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Box, Typography, TextField, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import DeleteIcon from '@mui/icons-material/Delete';

const BranchList = () => {
  const [branches, setBranches] = useState([
    { id: 1, name: 'SPL-CORPORATE', code: 'C001', shortName: 'SPL', locality: 'chennaiii', city: 'CHENNAI', state: 'TAMIL NADU', contactPerson: 'S SRINIVASAN' },
    { id: 2, name: 'CHENNAI', code: 'B001', shortName: 'CHN', locality: 'Alandur(Reopened W.E.F.6.6.05) S.O', city: 'CHENNAI', state: 'TAMIL NADU', contactPerson: 'RAJASEKAR S' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const columns = [
    { field: 'id', headerName: '#', width: 70 },
    { field: 'name', headerName: 'Branch Name', width: 200 },
    { field: 'code', headerName: 'Branch Code', width: 130 },
    { field: 'shortName', headerName: 'Branch Short Name', width: 150 },
    { field: 'locality', headerName: 'Locality', width: 200 },
    { field: 'city', headerName: 'City', width: 130 },
    { field: 'state', headerName: 'State', width: 130 },
    { field: 'contactPerson', headerName: 'Contact Person', width: 200 },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 100,
      renderCell: (params) => (
        <IconButton
          color="error"
          onClick={() => handleDeleteBranch(params.id)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  // Search functionality: filter branches based on search query
  const filteredBranches = branches.filter((branch) => {
    return (
      branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.city.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const wb = XLSX.read(event.target.result, { type: 'binary' });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(ws);
      setBranches(data);
    };
    reader.readAsBinaryString(file);
  };

  const handleDownloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(branches);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Branches');
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const excelBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(excelBlob, 'branches_data.xlsx');
  };

  const handleFullScreenToggle = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleViewToggle = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };

  const handleDeleteBranch = (id) => {
    setBranches(branches.filter(branch => branch.id !== id));
  };

  return (
    <Box sx={{ height: isFullScreen ? '100vh' : 400, width: '100%', p: 3, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" gutterBottom>
        Branches
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button component={Link} to="/branches/new" variant="contained">
          Add New Branch
        </Button>

        {/* Excel Import and Export Buttons */}
        <Box>
          <Button variant="contained" sx={{ mr: 2 }} component="label">
            Import Data
            <input type="file" hidden accept=".xlsx, .xls" onChange={handleFileUpload} />
          </Button>
          <Button variant="contained" onClick={handleDownloadExcel}>
            Export Data
          </Button>
        </Box>

        {/* Full-screen and View Toggle Buttons */}
        <Box>
          <IconButton onClick={handleFullScreenToggle}>
            {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>
          <Button variant="outlined" onClick={handleViewToggle}>
            Switch to {viewMode === 'grid' ? 'List' : 'Grid'} View
          </Button>
        </Box>
      </Box>

      {/* Search Input */}
      <TextField
  label="Search Branch"
  variant="outlined"
  value={searchQuery}
  onChange={handleSearchChange}
  sx={{ mt: 2, mb: 2 }}
  fullWidth
/>


      {/* Branch List/Grid View */}
      {viewMode === 'grid' ? (
        <DataGrid
          rows={filteredBranches}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
        />
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {filteredBranches.map(branch => (
            <Box key={branch.id} sx={{ p: 2, borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h6">{branch.name}</Typography>
                <Typography variant="body2">Code: {branch.code}</Typography>
                <Typography variant="body2">City: {branch.city}</Typography>
                <Typography variant="body2">State: {branch.state}</Typography>
                <Typography variant="body2">Contact: {branch.contactPerson}</Typography>
              </Box>
              <IconButton
                color="error"
                onClick={() => handleDeleteBranch(branch.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default BranchList;
