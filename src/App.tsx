import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { FC } from 'react';
import theme from './theme';
import HomeView from './homepage';

const App: FC = () => (
  <ThemeProvider theme={theme()}>
    <CssBaseline />
    <HomeView />
  </ThemeProvider>
);

export default App;
