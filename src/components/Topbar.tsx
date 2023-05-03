import { alpha, AppBar, Box, Button, Toolbar } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

export const Topbar = () => {
  const navigate = useNavigate();

  const menu = [
    { label: 'Media', target: '/#media' },
    { label: 'Public Policy', target: '/#public_policy' },
    { label: 'Research', target: '/#research' },
    { label: 'Engagement', target: '/#engagement' },
    { label: 'Workshop', target: '/workshop/shifting-ai-controversies' },
  ];

  const handleMenuClick = (url: string) => {
    const hash = url.match(/#(\w*)/);

    if (hash?.[1]) {
      const element = document.querySelector(`#${hash[1]}`);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    navigate(url, { replace: true, state: 'test', preventScrollReset: true, relative: 'path' });
  };

  return (
    <Box>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ backdropFilter: 'blur(3px)', bgcolor: alpha('#d9bad6', 0.3) }}
      >
        <Toolbar>
          <Logo height={28} onClick={() => handleMenuClick('/')} sx={{ cursor: 'pointer' }} />
          <Box width={16} />
          <Box flexGrow={1}>
            {menu.map(({ label, target }) => (
              <Button key={label} color="secondary" onClick={() => handleMenuClick(target)}>
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
