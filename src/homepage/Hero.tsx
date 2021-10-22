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
            Shaping AI is a multi-national and multi-disciplinary social research project that
            examines the global trajectories of public discourse on artificial intelligence (AI) in
            four countries (Germany, UK, Canada and France) over a ten-year period 2012-2021
          </Typography>
          <Stack spacing={2}>
            <Typography component="h3" variant={isMobile ? 'subtitle1' : 'h6'} maxWidth="60ch">
              Our comparative analysis will enable us to understand the differences and similarities
              in the construction of AI as a new scientific paradigm, societal force and contested
              political reality in these four countries by contextualizing their geo-political,
              historical and situational peculiarities. Funded by the European Open Research Area
              initiative for a period of three years (February 2021 - February 2024), Shaping AI
              brings together leading research teams from each of the four countries under scrutiny.
            </Typography>
            <Typography component="h3" variant={isMobile ? 'subtitle1' : 'h6'} maxWidth="60ch">
              Our project aims to be critical, comparative, qualitative, and to this end, we have
              adopted a four-dimensional research design, with the four teams collaborating to map
              and analyse AI controversies in and across four different spheres in which public
              discourse about AI has taken shape in the last ten years: media, policy, research and
              participation.
            </Typography>
            <Typography component="h3" variant={isMobile ? 'subtitle1' : 'h6'} maxWidth="60ch">
              The research on AI controversies in each of the four spheres is led by a different
              research team, with the study of "spill-over" controversies that have arisen between
              the spheres reserved for the second half of the project.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
