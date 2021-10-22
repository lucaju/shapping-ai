import { AppBar, Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
import React, { FC } from 'react';

const Topbar: FC = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar
      color="secondary"
      elevation={0}
      position="absolute"
      sx={{
        alignItems: 'center',
        py: 3,
        backgroundColor: alpha('#000', 0.05),
      }}
    >
      <img src="assets/images/logo.png" height={50} width={240} />
    </AppBar>
  </Box>
);

export default Topbar;
