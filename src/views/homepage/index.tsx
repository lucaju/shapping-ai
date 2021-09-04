import { Stack } from '@mui/material';
import Page from '@src/components/Page';
import React, { FC } from 'react';
import Axes from './Axes';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import Places from './Places';
import Topbar from './Topbar';

const HomeView: FC = () => {
  return (
    <Page title="Homepage">
      <Stack>
        <Topbar />
        <Hero />
        <Places />
        <Axes />
        <Contact />
        <Footer />
      </Stack>
    </Page>
  );
};

export default HomeView;
