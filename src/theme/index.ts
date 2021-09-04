import { colors, createTheme } from '@mui/material';

const theme = (darkMode?: boolean) =>
  createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: colors.orange[500],
      },
      secondary: {
        main: '#291a21',
      },
    },
    typography: {
      h1: { fontFamily: 'Syne, Helvetica, Arial, sans-serif' },
      h2: { fontFamily: 'Syne, Helvetica, Arial, sans-serif' },
      h3: { fontFamily: 'Syne, Helvetica, Arial, sans-serif' },
      h4: { fontFamily: 'Syne, Helvetica, Arial, sans-serif' },
      h5: { fontFamily: 'Syne, Helvetica, Arial, sans-serif' },
      button: { fontFamily: 'Syne, Helvetica, Arial, sans-serif' },
      fontFamily: 'Epilogue, Helvetica, Arial, sans-serif',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'Epilogue';
          font-style: normal;
          font-display: swap;s
          font-weight: 400;
          src: "local('Epilogue'), local('Epilogue-Regular')";
          unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
        }
      `,
      },
      MuiTypography: {
        styleOverrides: {
          h1: `
            @font-face {
              font-family: 'Syne';
              font-style: normal;
              font-display: swap;s
              font-weight: 700;
              src: "local('Syne'), local('Syne-Regular')";
              unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
            }
          `,
        },
      },
    },
  });

export default theme;
