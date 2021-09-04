import { Box, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';

const Axes: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id="axes" py={isMobile ? 8 : 15} sx={{ backgroundColor: '#d9bad6' }}>
      <Container maxWidth="md" sx={{ color: '#291a21' }}>
        <Stack spacing={isMobile ? 12 : 20}>
          <Stack id="media" spacing={2} alignItems="center">
            <svg
              fill="none"
              height={isMobile ? 300 : 640}
              style={{
                position: 'absolute',
                marginTop: isMobile ? '-69px' : '-168px',
              }}
              stroke="#291a21"
              strokeWidth={isMobile ? 1.5 : 1}
              viewBox="0 0 250 250"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="125" cy="125" rx="120" ry="28.73" />
            </svg>
            <Typography
              align="center"
              component="h2"
              mb={isMobile ? '48px !important' : '96px !important'}
              maxWidth="7ch"
              variant={isMobile ? 'h3' : 'h1'}
            >
              Media
            </Typography>
            <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
              Bacon ipsum dolor amet chuck chislic pork belly beef ribs bacon brisket, cow drumstick
              flank short loin. Beef ribs boudin sausage fatback pork chop sirloin hamburger flank
              tail buffalo. Jowl tail beef, pork chop ribeye kevin buffalo hamburger doner. Corned
              beef pastrami alcatra pork belly t-bone, salami boudin tenderloin buffalo leberkas
              hamburger. Cupim leberkas salami ground round ball tip spare ribs pork biltong filet
              mignon, rump chicken fatback kevin.
            </Typography>
            <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
              Short ribs chicken capicola prosciutto sirloin salami bresaola sausage t-bone ham hock
              beef ribs. Doner chuck rump turducken pork chop. Landjaeger pancetta hamburger,
              leberkas capicola filet mignon salami drumstick biltong beef ribs buffalo. Kielbasa
              strip steak pork loin shoulder pork alcatra. Tail sirloin chicken meatball pork, cupim
              jerky. Landjaeger pork chop doner burgdoggen drumstick frankfurter ham hock. Chislic
              boudin corned beef kielbasa bresaola turkey chicken filet mignon turducken pork chop
              tail short ribs.
            </Typography>
          </Stack>

          <Stack id="public-policy" spacing={2} alignItems="center">
            <svg
              fill="none"
              height={isMobile ? 100 : 200}
              style={{
                position: 'absolute',
                marginLeft: isMobile ? '94px' : '186px',
                marginTop: isMobile ? '-18px' : '-48px',
              }}
              stroke="#291a21"
              strokeWidth={isMobile ? 3 : 2}
              viewBox="0 0 250 250"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M52.4,214.38,125,245l72.6-29.22L125,5Zm0,0,72.6-34.5V5m72.6,210.78L125,179.88" />
            </svg>
            <Typography
              align="center"
              component="h2"
              maxWidth="9ch"
              variant={isMobile ? 'h3' : 'h1'}
            >
              Public Policy
            </Typography>
            <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
              Bacon ipsum dolor amet chuck chislic pork belly beef ribs bacon brisket, cow drumstick
              flank short loin. Beef ribs boudin sausage fatback pork chop sirloin hamburger flank
              tail buffalo. Jowl tail beef, pork chop ribeye kevin buffalo hamburger doner. Corned
              beef pastrami alcatra pork belly t-bone, salami boudin tenderloin buffalo leberkas
              hamburger. Cupim leberkas salami ground round ball tip spare ribs pork biltong filet
              mignon, rump chicken fatback kevin.
            </Typography>
            <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
              Short ribs chicken capicola prosciutto sirloin salami bresaola sausage t-bone ham hock
              beef ribs. Doner chuck rump turducken pork chop. Landjaeger pancetta hamburger,
              leberkas capicola filet mignon salami drumstick biltong beef ribs buffalo. Kielbasa
              strip steak pork loin shoulder pork alcatra. Tail sirloin chicken meatball pork, cupim
              jerky. Landjaeger pork chop doner burgdoggen drumstick frankfurter ham hock. Chislic
              boudin corned beef kielbasa bresaola turkey chicken filet mignon turducken pork chop
              tail short ribs.
            </Typography>
          </Stack>

          <Stack id="research" spacing={2} alignItems="center">
            <svg
              fill="none"
              height={isMobile ? 100 : 200}
              style={{
                position: 'absolute',
                marginLeft: isMobile ? '-132px' : '-266px',
                marginTop: isMobile ? '-24px' : '-60px',
              }}
              stroke="#291a21"
              strokeWidth={isMobile ? 3 : 2}
              viewBox="0 0 250 250"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M116.47,68.86,45.28,35.33,116.47,5l71.18,30.33ZM45.28,35.67v175L116.47,245l71.18-33V35.67L116.47,69.2ZM116.47,69.2V245" />
            </svg>
            <Typography
              align="center"
              component="h2"
              maxWidth="9ch"
              variant={isMobile ? 'h3' : 'h1'}
            >
              Research
            </Typography>
            <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
              Bacon ipsum dolor amet chuck chislic pork belly beef ribs bacon brisket, cow drumstick
              flank short loin. Beef ribs boudin sausage fatback pork chop sirloin hamburger flank
              tail buffalo. Jowl tail beef, pork chop ribeye kevin buffalo hamburger doner. Corned
              beef pastrami alcatra pork belly t-bone, salami boudin tenderloin buffalo leberkas
              hamburger. Cupim leberkas salami ground round ball tip spare ribs pork biltong filet
              mignon, rump chicken fatback kevin.
            </Typography>
            <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
              Short ribs chicken capicola prosciutto sirloin salami bresaola sausage t-bone ham hock
              beef ribs. Doner chuck rump turducken pork chop. Landjaeger pancetta hamburger,
              leberkas capicola filet mignon salami drumstick biltong beef ribs buffalo. Kielbasa
              strip steak pork loin shoulder pork alcatra. Tail sirloin chicken meatball pork, cupim
              jerky. Landjaeger pork chop doner burgdoggen drumstick frankfurter ham hock. Chislic
              boudin corned beef kielbasa bresaola turkey chicken filet mignon turducken pork chop
              tail short ribs.
            </Typography>
          </Stack>

          <Stack id="public-participation" spacing={2} alignItems="center">
            <svg
              fill="none"
              height={isMobile ? 80 : 200}
              style={{
                position: 'absolute',
                marginLeft: isMobile ? '148px' : '314px',
                marginTop: isMobile ? '24px' : '-4px',
              }}
              stroke="#291a21"
              strokeWidth={isMobile ? 4 : 2}
              viewBox="0 0 250 250"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M114.58,247.3c60.51,0,109.57-48.47,109.57-108.26S175.09,30.77,114.58,30.77,5,79.25,5,139,54.06,247.3,114.58,247.3ZM135.42,2.7C195.94,2.7,245,51.17,245,111H135.42Z" />
            </svg>
            <Typography
              align="center"
              component="h2"
              maxWidth="10ch"
              variant={isMobile ? 'h3' : 'h1'}
            >
              Public Participation
            </Typography>
            <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
              Bacon ipsum dolor amet chuck chislic pork belly beef ribs bacon brisket, cow drumstick
              flank short loin. Beef ribs boudin sausage fatback pork chop sirloin hamburger flank
              tail buffalo. Jowl tail beef, pork chop ribeye kevin buffalo hamburger doner. Corned
              beef pastrami alcatra pork belly t-bone, salami boudin tenderloin buffalo leberkas
              hamburger. Cupim leberkas salami ground round ball tip spare ribs pork biltong filet
              mignon, rump chicken fatback kevin.
            </Typography>
            <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
              Short ribs chicken capicola prosciutto sirloin salami bresaola sausage t-bone ham hock
              beef ribs. Doner chuck rump turducken pork chop. Landjaeger pancetta hamburger,
              leberkas capicola filet mignon salami drumstick biltong beef ribs buffalo. Kielbasa
              strip steak pork loin shoulder pork alcatra. Tail sirloin chicken meatball pork, cupim
              jerky. Landjaeger pork chop doner burgdoggen drumstick frankfurter ham hock. Chislic
              boudin corned beef kielbasa bresaola turkey chicken filet mignon turducken pork chop
              tail short ribs.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Axes;
