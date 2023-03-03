import Box, { BoxProps } from '@mui/material/Box';
import React from 'react';

interface LogoProps extends BoxProps {
  height?: string | number;
}

export const Logo = ({ height = 'auto', ...props }: LogoProps) => (
  <Box display="flex" {...props}>
    <img alt="Shapping AI" src="assets/images/logo.png" height={height} />
  </Box>
);
