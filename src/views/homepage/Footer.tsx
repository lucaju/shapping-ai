import {
  Box,
  Button,
  Container,
  Divider,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { FC } from 'react';

const Footer: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const getLengthInPercent = (min: number, range: number) => {
    const length = min + Math.random() * range;
    return `${length}%`;
  };

  const MockUp = () => (
    <Box width={isMobile ? 350 : 250}>
      <Typography component="div" variant="overline">
        <Skeleton animation={false} width={getLengthInPercent(40, 40)} />
      </Typography>
      <Typography component="div" variant="h4">
        <Skeleton animation={false} width={getLengthInPercent(50, 40)} />
      </Typography>
      <Typography component="div" variant="body2">
        <Skeleton animation={false} />
      </Typography>
      <Typography component="div" variant="body2">
        <Skeleton animation={false} width={getLengthInPercent(80, 10)} />
      </Typography>
      <Typography component="div" variant="body2">
        <Skeleton animation={false} width={getLengthInPercent(40, 20)} />
      </Typography>
    </Box>
  );

  return (
    <Box id="footer" py={isMobile ? 4 : 8}>
      <Container maxWidth="md">
        <Stack spacing={6} alignItems="center">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <MockUp />
            <MockUp />
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Typography variant="caption">Ⓒ 2010 - 2020</Typography>
            <Button color="inherit" size="small" sx={{ fontFamily: 'Epilogue' }}>
              Privacy
            </Button>
            <Button color="inherit" size="small" sx={{ fontFamily: 'Epilogue' }}>
              Terms
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
