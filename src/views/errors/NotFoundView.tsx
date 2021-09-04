import { Box, Typography } from '@mui/material';
import Page from '@src/components/Page';
import React, { FC } from 'react';

const NotFoundView: FC = () => {
  return (
    <Page title="Page not Found">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        sx={{
          backgroundImage: 'url(/assets/images/bg1.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundOrigin: 'content-box',
        }}
      >
        <img src="assets/images/logo.png" height={100} width={480} />
        <Typography variant="h4">404</Typography>
        <Typography variant="subtitle2">error</Typography>
      </Box>
    </Page>
  );
};

export default NotFoundView;
