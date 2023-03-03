import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Markdown } from './Markdown';

export const Engagement = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack id="engagement" spacing={4} alignItems="center">
      <svg
        fill="none"
        height={isMobile ? 80 : 200}
        style={{
          position: 'absolute',
          marginLeft: isMobile ? '148px' : '314px',
          marginTop: isMobile ? '6px' : '-34px',
        }}
        stroke="#291a21"
        strokeWidth={isMobile ? 4 : 2}
        viewBox="0 0 250 250"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M114.58,247.3c60.51,0,109.57-48.47,109.57-108.26S175.09,30.77,114.58,30.77,5,79.25,5,139,54.06,247.3,114.58,247.3ZM135.42,2.7C195.94,2.7,245,51.17,245,111H135.42Z" />
      </svg>
      <Typography align="center" component="h2" maxWidth="10ch" variant={isMobile ? 'h3' : 'h1'}>
        Engagement
      </Typography>
      <Stack spacing={2} alignItems="left">
        <Markdown filename="engagement" />
      </Stack>
    </Stack>
  );
};
