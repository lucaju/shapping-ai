import { Box, Button, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';

const Contact: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id="contact" py={8} sx={{ backgroundColor: '#FF6426' }}>
      <Container maxWidth="xs">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography variant={isMobile ? 'body2' : 'body1'} fontWeight={600}>
            To learn more about the project, to discuss research and knowledge dissemination
            opportunities, please contact the team coordinator.
          </Typography>
          <Button
            href="mailto:info@shapingai.org"
            color="secondary"
            size="large"
            sx={{ textTransform: 'none', px: 3, py: 2 }}
            variant="contained"
          >
            Reach out
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
