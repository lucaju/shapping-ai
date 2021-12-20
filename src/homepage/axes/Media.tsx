import { Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';

const Media: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack id="media" spacing={4} alignItems="center">
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
      <Stack spacing={2} alignItems="left">
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          Is AI a tsunami, a fourth industrial revolution, or a looming dystopia? Since 2012, a wide
          array of media experts and professionals have shaped popular discourse about, and lay
          understandings on, what AI is, what it currently does, what it could eventually accomplish
          and whether journalist speculation about AI has been as influential to AI&apos;s success as the
          technology itself. Through inductive and deductive mixed methods, research investigates
          how journalists simplify competing technical and policy realities in the name of public
          interest, give certain actors more visibility and legitimacy than others, and invoke
          particular publics when stabilizing realities of 21st-century AI. We seek to understand
          both how the media has shaped national and international understandings of AI as well as
          understand the influence of the press in a high-choice and saturated media environment
          where the latest news report becomes just another status update in the daily feed.
        </Typography>
      </Stack>
      <Stack spacing={2} alignItems="left">
        <Typography component="p" variant={isMobile ? 'subtitle1' : 'h6'} sx={{ fontWeight: 700 }}>
          Team Canada
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Link
            href="https://inrs.ca/en/research/professors/jonathan-roberge/"
            target="_blank"
            rel="noopener"
            color="secondary"
            sx={{ fontWeight: 700 }}
          >
            Jonathan Roberge
          </Link>{' '}
          is Full Professor at the Institut National de la Recherche Scientifique (INRS) in
          Montreal, Canada. He funded the Nenic Lab as part of the Canada Research Chair in Digital
          Culture he has held since 2012. His most recent edited volumes include Algorithmic Culture
          (Routledge, 2016) and The Cultural Life of Machine Learning (Palgrave, 2020).
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Link
            href="https://www.fenwickmckelvey.com/"
            target="_blank"
            rel="noopener"
            color="secondary"
            sx={{ fontWeight: 700 }}
          >
            Fenwick McKelvey
          </Link>{' '}
          is an associate professor in Information and Communication Technology Policy at Concordia
          University. He is the author of Internet Daemons (University of Minnesota Press, 2018),
          winner of the 2019 Gertrude J. Robinson for Best Book awarded by the Canadian
          Communication Association.
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Sophie Toupin
          </Typography>{' '}
          is currently a postdoctoral researcher at Concordia University (Horizon program) where she
          examines critical perspectives in artificial intelligence. She is one of the co-editors of
          The Handbook of Peer Production (Wiley, 2021)
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Guillaume Dandurand
          </Typography>{' '}
          is a postdoctoral fellow at the Institut national de la recherche scientifique, in
          Montreal, Canada. He is co-editor of Les économies de la promesse (Presses de l&apos;Université
          de Montréal, 2022). His doctoral research was awarded York University&apos;s Dissertation Prize
          (2019) and made the shortlist for the International Convention of Asia Scholars Social
          Sciences Dissertation competition (2021).
        </Typography>

        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Meaghan Wester
          </Typography>{' '}
          is a second year Master&apos;s Student in Media Studies at Concordia University and a recipient
          of the Joseph Armand Bombardier Canadian Graduate Scholarship. She holds a BA from McGill
          University in Sociology with concentrations in both Communication Studies and Political
          Science. Her research investigates the ethical guidelines governing the procurement of
          Artificial Intelligence by the Canadian government.
        </Typography>

        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Nick Gertler
          </Typography>{' '}
          is a Master&apos;s student in Media Studies at Concordia University. Funded by scholarships
          from both SSHRC and FRQSC, his thesis focuses on algorithmic impact assessments and
          algorithmic governance in Canada.
        </Typography>

        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Marek Blottiere
          </Typography>{' '}
          Marek Blottiere is a research assistant for the Shaping AI research project. As part of
          his FRQSC-funded Master&apos;s degree in cultural studies at the Institut National de la
          Recherche Scientifique, Marek investigates the media ecosystem in Montreal, Canada, and
          how it is shaping the cultural politics of AI.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Media;
