import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  const aboutUs = "RBuilder is a smart, easy-to-use resume builder that helps you create professional, ATS-friendly resumes in minutes. Customize templates, preview in real time, and download instantly — no design skills needed."
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'purple' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <img width={'40px'} src="https://icon-library.com/images/download-resume-icon/download-resume-icon-11.jpg" alt="Logo" />
          </IconButton>
          <Typography variant="" component="" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-white text-decoration-none'>RBuilder</Link>
          </Typography>
          <Tooltip title={aboutUs}>
            <Link to={'/history'} className='text-white text-decoration-none text-uppercase font-bold'>About Us</Link>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header