import { Box, Container, Link, Stack, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

export const Places = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const axes = [
    { place: 'Canada', domain: 'Media', anchor: 'media' },
    { place: 'Germany', domain: 'Public Policy', anchor: 'public_policy' },
    { place: 'United Kingdom', domain: 'Research', anchor: 'research' },
    { place: 'France', domain: 'Engagement', anchor: 'engagement' },
  ];

  const handleClick = (sectionName: string) => {
    const element = document.querySelector(`#${sectionName}`);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Box id="places" py={isMobile ? 8 : 15} sx={{ bgcolor: '#291a21', color: '#d9bad6' }}>
      <Stack spacing={1}>
        {axes.map(({ anchor, domain, place }, i) => (
          <Box key={place}>
            <Container maxWidth="md" sx={{ color: '#d9bad6' }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Link
                  onClick={() => handleClick(anchor)}
                  underline="hover"
                  variant={isMobile ? 'h5' : 'h3'}
                >
                  {place}
                </Link>
                <Link
                  color="inherit"
                  onClick={() => handleClick(anchor)}
                  underline="hover"
                  variant={isMobile ? 'subtitle1' : 'h6'}
                >
                  {domain}
                </Link>
              </Stack>
            </Container>
            {i < axes.length && (
              <Box
                height="1px"
                width="100%"
                mt={1}
                sx={{
                  backgroundImage:
                    'linear-gradient(to right, #ff6426, #ff6d6d, #ff85a2, #efa1c6, #d9bad6)',
                }}
              />
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
