import { Stack } from '@mui/material';
import { Contact, Topbar } from '@src/components';
import { Page } from '@src/layouts';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Axes } from './axes';
import { Introduction } from './introduction';
import { Places } from './Places';

export const HomeView = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <Page>
      <Stack>
        <Topbar />
        <Introduction />
        <Places />
        <Axes />
        <Contact />
      </Stack>
    </Page>
  );
};
