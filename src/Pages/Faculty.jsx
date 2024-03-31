import React from 'react';
import Navbar from '../Components/Navbar'; // Assuming location
import FacultyInfoCard from '../Components/FacultyInfoCard';
import StudentDetail from '../Components/StudentDetail'; // Assuming location
import StudentTable from '../Components/StudentTable'; // Assuming location
import { Box } from '@mui/material'; // For container

function Faculty() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '65px',gap:5 }}> {/* Container */}
      <Navbar></Navbar>
      <FacultyInfoCard />  
      <StudentDetail />
      <StudentTable/>
      
      
    </Box>
  )
}

export default Faculty;
