import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Markdown } from './Markdown';

export const Media = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack id="media" spacing={4} alignItems="center">
      <svg
        fill="none"
        height={isMobile ? 300 : 640}
        style={{ position: 'absolute', marginTop: isMobile ? '-69px' : '-168px' }}
        stroke="#291a21"
        strokeWidth={isMobile ? 1.5 : 1}
        viewBox="0 0 250 250"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="125" cy="125" rx="120" ry="28.73" />
      </svg>

      <Typography
        align="center"
        component="h2"
        mb={isMobile ? '48px !important' : '96px !important'}
        maxWidth="7ch"
        variant={isMobile ? 'h3' : 'h1'}
      >
        Media
      </Typography>
      <Stack spacing={2} alignItems="left">
        <Markdown filename="media" />
      </Stack>
    </Stack>
  );
};
