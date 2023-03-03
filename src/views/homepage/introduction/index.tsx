import { Box, Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import { Logo } from '@src/components';
import React from 'react';
import { useWindowScroll } from 'react-use';
import { Markdown } from './Markdown';

export const Introduction = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { y } = useWindowScroll();

  const logoHeight = Math.max(40, 150 - y);

  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        backgroundImage: 'url(/assets/images/bg1.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundOrigin: 'content-box',
      }}
      overflow="auto"
    >
      <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
        <Box display="flex" justifyContent="center" mb={4}>
          <Logo height={isMobile ? 80 : logoHeight} />
        </Box>
        <Stack spacing={7}>
          <Markdown filename="introduction" />
        </Stack>
      </Container>
    </Box>
  );
};
