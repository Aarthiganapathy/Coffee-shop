import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import logo from '../assets/image/coffee-cup 1.svg';
import { Link as ScrollLink } from "react-scroll";
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

export const Index = () => {
  return (
    <Container maxWidth="xxl">
      {/* Header Section */}
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'flex-end', 
          justifyContent: 'space-between', // Added to space out logo and nav
          gap: '1rem',
          py: 2
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
          <img 
            src={logo} 
            alt="Bean Scene Logo" 
            style={{ 
              height: '40px',
              width: 'auto',
              color:'black',
            }} 
          />
          <Typography
            sx={{
              fontFamily: 'Poppins',
            }}
            variant="h4" component="h1">
              Coffee
          </Typography>
        </Box>

        {/* Navigation Section */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <ScrollLink to="places-section" smooth duration={400}>
            <Button color="inherit">About</Button>
          </ScrollLink>
          <Link component={RouterLink} to="/Pricing" style={{ textDecoration: "none" }}>
            <Button color="inherit">Pricing</Button>
          </Link>
          <Link component={RouterLink} to="/famous" style={{ textDecoration: "none" }}>
            <Button color="inherit">Famous</Button>
          </Link>
          <ScrollLink to="places-section" smooth duration={400}>
            <Button color="inherit">Places</Button>
          </ScrollLink>
        </Box>
      </Box>
    </Container>
    
  );
};

export default Index;