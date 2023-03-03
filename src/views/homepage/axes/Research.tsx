import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Markdown } from './Markdown';

export const Research = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack id="research" spacing={4} alignItems="center">
      <svg
        fill="none"
        height={isMobile ? 100 : 200}
        style={{
          position: 'absolute',
          marginLeft: isMobile ? '-132px' : '-266px',
          marginTop: isMobile ? '-24px' : '-60px',
        }}
        stroke="#291a21"
        strokeWidth={isMobile ? 3 : 2}
        viewBox="0 0 250 250"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M116.47,68.86,45.28,35.33,116.47,5l71.18,30.33ZM45.28,35.67v175L116.47,245l71.18-33V35.67L116.47,69.2ZM116.47,69.2V245" />
      </svg>
      <Typography align="center" component="h2" maxWidth="9ch" variant={isMobile ? 'h3' : 'h1'}>
        Research
      </Typography>
      <Stack spacing={2} alignItems="left">
        <Markdown filename="research" />
      </Stack>
    </Stack>
  );
};
