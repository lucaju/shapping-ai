import { Box, Stack } from '@mui/material';
import React, { FC } from 'react';
import Axes from './axes';
import Contact from './Contact';
import Hero from './Hero';
import Places from './Places';
import Topbar from './Topbar';

const HomeView: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        backgroundColor: 'background.default',
      }}
    >
      <Box sx={{ flex: '1 1 auto' }}>
        <Stack>
          <Topbar />
          <Hero />
          <Places />
          <Axes />
          <Contact />
        </Stack>
      </Box>
    </Box>
  );
};

export default HomeView;
