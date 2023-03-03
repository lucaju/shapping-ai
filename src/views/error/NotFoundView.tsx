import { Box, Link, Stack, Typography } from '@mui/material';

import { Page } from '@src/layouts';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const NotFoundView = () => (
  <Page title="Page Not Found">
    <Box
      display="flex"
      justifyContent="center"
      height="100vh"
      sx={{
        backgroundImage: 'url(/assets/images/bg1.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundOrigin: 'content-box',
      }}
    >
      <Stack alignItems="center" py={8} height="100vh" spacing={4}>
        <img src="assets/images/logo.png" height={50} width={360} />
        <Typography align="center" component="h2" mb={2} variant="h4">
          Page not found
        </Typography>
        <Box>
          <Typography align="center">
            You either tried some shady route or you came here by mistake.
          </Typography>
          <Typography align="center">
            Go back to the{' '}
            <Link color="secondary.main" component={RouterLink} to="/" underline="always">
              main page.
            </Link>
          </Typography>
        </Box>
      </Stack>
    </Box>
  </Page>
);
