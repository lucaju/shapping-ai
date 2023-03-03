import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const BasicLayout = () => (
  <Box sx={{ display: 'flex', width: '100%', bgcolor: 'background.default' }}>
    <Box sx={{ flex: '1 1 auto' }}>
      <Outlet />
    </Box>
  </Box>
);
