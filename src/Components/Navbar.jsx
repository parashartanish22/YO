import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// Assuming you're using an icon for settings, like 'SettingsIcon' from Material UI icons
import SettingsIcon from '@mui/icons-material/Settings';

const Logosvg = ( // Assuming Logosvg is a valid SVG content ) => (
  <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    {/* ... Your SVG content here ... */}
  </svg>
);

const TextStyle = {
  fontWeight: 'bold',
  color: '#379AE6FF',
  fontSize: '16px',
  fontFamily: 'Lexend',
};

function Navbar() {
  return (
    <>
      <AppBar position="fixed" style={{ width: '100%', top: 0, backgroundColor: '#FFFFFFFF' }}>
        <Toolbar style={{ minHeight: 64, display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logosvg} alt="" style={{ maxWidth: 30 }} />
            <Typography variant="h6" noWrap component="div" sx={TextStyle}>
              Logo
            </Typography>
          </div>
          <IconButton color="black" aria-label="Settings">
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
