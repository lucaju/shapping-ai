import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Markdown } from './Markdown';

export const PublicPolicy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack id="public_policy" spacing={4} alignItems="center" sx={{ scrollMargin: -100 }}>
      <svg
        fill="none"
        height={isMobile ? 100 : 200}
        style={{
          position: 'absolute',
          marginLeft: isMobile ? '94px' : '186px',
          marginTop: isMobile ? '-18px' : '-48px',
        }}
        stroke="#291a21"
        strokeWidth={isMobile ? 3 : 2}
        viewBox="0 0 250 250"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M52.4,214.38,125,245l72.6-29.22L125,5Zm0,0,72.6-34.5V5m72.6,210.78L125,179.88" />
      </svg>
      <Typography align="center" component="h2" maxWidth="9ch" variant={isMobile ? 'h3' : 'h1'}>
        Public Policy
      </Typography>
      <Stack spacing={2} alignItems="left">
        <Markdown filename="public_policy" />
      </Stack>
    </Stack>
  );
};
