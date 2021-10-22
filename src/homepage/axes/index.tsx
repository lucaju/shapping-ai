import { Box, Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
import Media from './Media';
import PublicPolicy from './PublicPolicy';
import Research from './Research';
import Engagement from './Engagement';

const Axes: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id="axes" py={isMobile ? 8 : 15} sx={{ backgroundColor: '#d9bad6' }}>
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

export default Axes;
