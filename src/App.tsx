import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import theme from './theme';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const App = () => {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
