import { Box, Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Engagement } from './Engagement';
import { Media } from './Media';
import { PublicPolicy } from './PublicPolicy';
import { Research } from './Research';

export const Axes = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id="axes" py={isMobile ? 8 : 15}
    sx={{ bgcolor: '#d9bad6'}}
    >
      <Container maxWidth="md" sx={{ color: '#291a21' }}>
        <Stack spacing={isMobile ? 12 : 20}>
          <Media />
          <PublicPolicy />
          <Research />
          <Engagement />
        </Stack>
      </Container>
    </Box>
  );
};
