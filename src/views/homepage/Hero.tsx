import { Box, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';

const Hero: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
    >
      <Container maxWidth="md" sx={{ mt: 25, mb: 8 }}>
        <Stack spacing={7}>
          <Typography component="h2" variant={isMobile ? 'h5' : 'h3'} maxWidth="60ch">
            We are a multinational and multidisciplinary research project that examines the global
            trajectory of discourses on artifical intelligence (AI) in four countries (Germany, UK,
            Canada and France) over a ten-year period 2012-2021
          </Typography>
          <Stack spacing={2}>
            <Typography component="h3" variant={isMobile ? 'subtitle1' : 'h6'} maxWidth="60ch">
              This comparative analysis will lead us to analyze the differences and similarities of
              the social construction of AI in these four countries by contextualizing their
              geopolitical and historical peculiarities.
            </Typography>
            <Typography component="h3" variant={isMobile ? 'subtitle1' : 'h6'} maxWidth="60ch">
              Funded by the European Open Research Area initiative for a period of three years
              (February 2021 - February 2024), the Shapping AI project aims to be critical,
              comparative, qualitative, and four-dimensional. These four dimensions, called "work
              packages" (WP), will be distributed among the four research teams:
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
