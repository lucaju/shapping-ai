import { Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';

const PublicPolicy: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack id="public-policy" spacing={4} alignItems="center">
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
      <Typography align="center" component="h2" maxWidth="9ch" variant={isMobile ? 'h3' : 'h1'}>
        Public Policy
      </Typography>
      <Stack spacing={2} alignItems="left">
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          The aim of the policy work package is to identify the (re-)presentation and shaping of
          artificial intelligence in national policy making. A first research stream focuses on
          policy documents issued by public sector actors that relate to AI, such as white papers,
          strategies, and guidelines. The analysis centers on actors, topics, and shifts over time.
          Because artificial intelligence is far from being a well-defined technology with an
          unanimously accepted definition, it seems necessary to conceptualize policy documents as
          potential objects of both controversy and closure: the publication of a policy document
          may mean the end of a negotiation over definitions, responsibilities, and resources, yet
          it may also mark the beginning of such negotiations by sparking contestations.
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          A second research stream is dedicated to investigating the key rationales, the
          justifications rhetorics, and the mobilized sociotechnical imaginaries including their
          underlying assumptions. It takes into account not only existing policy documents, but also
          considers the broader political agenda-setting cycle that has preceded and surrounded the
          existence of these documents.
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          Data collection and analysis rely on a mixed methods approach that includes quantitative
          as well as qualitative elements. Within the policy work package, the project will
          establish a database of policy documents, carry out content analysis, and conduct in-depth
          interviews.
        </Typography>
      </Stack>
      <Stack spacing={2} alignItems="left">
        <Typography component="p" variant={isMobile ? 'subtitle1' : 'h6'} sx={{ fontWeight: 700 }}>
          Team Germany
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Link
            href="https://www.uni-bremen.de/zemki/das-zemki/mitglieder/mitglieder/mitgliedsprofil/idm/24837"
            target="_blank"
            rel="noopener"
            color="secondary"
            sx={{ fontWeight: 700 }}
          >
            Christian Katzenbach
          </Link>{' '}
          is a professor of media and communication studies at the University of Bremen and an
          associated member of the HIIG Berlin. He is a principal investigator of the project and
          leads the “Shaping AI”-consortium.
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Link
            href="https://www.hiig.de/en/anna-jobin-dr/"
            target="_blank"
            rel="noopener"
            color="secondary"
            sx={{ fontWeight: 700 }}
          >
            Anna Jobin
          </Link>{' '}
          is a senior researcher at the HIIG Berlin and participates in the consortium lead of the
          project. She is a board member of the Swiss STS Association, an elected member of the
          Swiss Young Academy, and presides over the Swiss extra-parliamentary Federal Media
          Commission.
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Link
            href="https://www.hiig.de/laura-liebig/"
            target="_blank"
            rel="noopener"
            color="secondary"
            sx={{ fontWeight: 700 }}
          >
            Laura Liebig
          </Link>{' '}
          is a researcher and PhD candidate at the University of Bremen and an associated member of
          the HIIG Berlin. She graduated in media and communication science, political science
          (B.A.) as well as Digital Media and Society (M.A.) at the University of Bremen.
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Link
            href="https://www.hiig.de/en/licinia-guettel/"
            target="_blank"
            rel="noopener"
            color="secondary"
            sx={{ fontWeight: 700 }}
          >
            Licinia Güttel
          </Link>{' '}
          is a student assistant at the HIIG Berlin. She studies Franco-German Political and Social
          Sciences at the Free University Berlin and the European campus of Sciences Po Paris
          (double B.A.). She is a recipient of the American Stephen M. Kellen Foundation and the
          German Academic Scholarship Foundation.
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Pascal Poolke
          </Typography>{' '}
          is a student assistant at the University of Bremen. He studies Business informatics (B.A.)
          with a focus on artificial intelligence in the finance sector.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PublicPolicy;
