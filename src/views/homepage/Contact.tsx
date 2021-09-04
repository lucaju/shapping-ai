import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { FC } from 'react';

const Contact: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id="contact" py={isMobile ? 8 : 15} sx={{ backgroundColor: '#FF6426' }}>
      <Container maxWidth="xs">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography component="h2" variant={isMobile ? 'h4' : 'h5'}>
            You want to connect?
          </Typography>
          <Typography variant={isMobile ? 'body2' : 'body1'} fontWeight={600}>
            Bacon ipsum dolor amet chuck chislic pork belly beef ribs bacon brisket, cow drumstick
            flank short loin. Beef ribs boudin sausage .
          </Typography>
          <Button
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
