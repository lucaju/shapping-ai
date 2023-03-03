import { Box, Container, Stack } from '@mui/material';
import { Topbar } from '@src/components';
import { Page } from '@src/layouts';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Content } from './Content';

export const WorkshopView = () => {
  const { id } = useParams();

  const [content, setContent] = useState('');

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const file = `${id}.md`;
    const response = await fetch(`./content/workshop/${file}`);
    const text = await response.text();
    setContent(text);
  };

  return (
    <Page title="Workshop">
      <Box
        height="100vh"
        width="100vw"
        overflow="auto"
        sx={{
          backgroundImage: 'url(/assets/images/bg1.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundOrigin: 'content-box',
        }}
      >
        <Stack>
          <Topbar />
          <Container maxWidth="lg">
            <Content>{content}</Content>
          </Container>
        </Stack>
      </Box>
    </Page>
  );
};
