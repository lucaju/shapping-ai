import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';

const Engagement: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack id="engagement" spacing={4} alignItems="center">
      <svg
        fill="none"
        height={isMobile ? 80 : 200}
        style={{
          position: 'absolute',
          marginLeft: isMobile ? '148px' : '314px',
          marginTop: isMobile ? '6px' : '-34px',
        }}
        stroke="#291a21"
        strokeWidth={isMobile ? 4 : 2}
        viewBox="0 0 250 250"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M114.58,247.3c60.51,0,109.57-48.47,109.57-108.26S175.09,30.77,114.58,30.77,5,79.25,5,139,54.06,247.3,114.58,247.3ZM135.42,2.7C195.94,2.7,245,51.17,245,111H135.42Z" />
      </svg>
      <Typography align="center" component="h2" maxWidth="10ch" variant={isMobile ? 'h3' : 'h1'}>
        Engagement
      </Typography>
      <Stack spacing={2} alignItems="left">
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          From the creation of laboratories for the testing of intelligent city infrastructure to
          deep learning trials in hospitals to testbeds that are realized as part of AI industrial
          strategies, user participation and public involvement are a central component of AI
          paradigms. It seems that the public discourse surrounding the AI revolution entails a
          range of new interfaces between science, technology and the society at large. The French
          team, while paying attention to the articulation of these propositions in policy, research
          and media circles, is committed to trying to design alternative, social science-led forms
          of public engagement with AI and the study thereof.
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          Building up inventive and provocative design methods, we will get in touch with expert
          actors (journalists, policymakers, researchers/technologists, genuine AI users) to situate
          their contribution in the past, current and future trajectories of AI. At the same time,
          we will pay attention to the figures of AI’s users and to the configurations of
          “humans-in-the-loop” in AI systems: how do AI technologies organise and enrol social
          participation in their deployment? How are humans computed both individually and
          collectively in their interactions with AI? How are their identity (as users, beta
          testers, trainers, sources of data etc.) and agencies defined?
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          One main ambition of the project is to federate a concerned public, composed of a
          plurality of actors, who will contribute to the research as co-investigators. Together, we
          will commit to specify areas of controversiality in AI, to pinpoint and analyse
          controversies that matter to them and to design specific interventions to address,
          collectively, problematic trajectories.
        </Typography>
        <Typography
          component="p"
          sx={{ textAlign: 'left' }}
          variant={isMobile ? 'body1' : 'subtitle1'}
        >
          Acting as a Design Laboratory, we propose at least three types of activities:
        </Typography>
        <Typography component="ol" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="li" variant={isMobile ? 'body1' : 'subtitle1'}>
            a collective documentation effort as a way to generate situated, practice-based and
            dialogic perspectives on AI recent history,
          </Typography>
          <Typography component="li" variant={isMobile ? 'body1' : 'subtitle1'}>
            engagement workshops that will enable situated and grounded discussions about how AI
            objects reconfigure human interactions, hence reflecting upon AI not only as
            technological innovation but also as a series of social experiments, and
          </Typography>
          <Typography component="li" variant={isMobile ? 'body1' : 'subtitle1'}>
            interventions that could span from low-tech prototypes able to stimulate new forms of
            civic commitment to procedures to keep controversies open and inspectable, preventing
            premature closures.
          </Typography>
        </Typography>
      </Stack>
      <Stack spacing={2} alignItems="left">
        <Typography component="p" variant={isMobile ? 'h6' : 'h6'} sx={{ fontWeight: 700 }}>
          Team France
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Axel Meunier
          </Typography>{' '}
          is a PhD candidate in design at Goldsmiths, embedded at the médialab for his fieldwork.
          His focus is on the participation of publics in AI.
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Dominique Cardon
          </Typography>{' '}
          is professor of sociology and director of the médialab at Sciences Po. His work seeks to
          articulate the sociology of science and technology with a sensitive approach to the
          transformations of contemporary social worlds. He is currently working on the social
          effects of the generalization of artificial intelligence techniques in everyday life.
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Donato Ricci
          </Typography>{' '}
          is a design researcher. While he has a background in data and information visualisation,
          he specialises in the use of Inventive and Participatory Design Methods in Human and
          Social Sciences. He coordinates the French team’s activities.
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Maxime Crépel
          </Typography>{' '}
          is a research engineer specialized in digital sociology and digital methods. He analyzes
          AI media discourses using NLP Methods.
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Pauline Gourlet
          </Typography>{' '}
          is a design researcher and practitioner. She is interested in documentation & data
          practices and their potential for participatory activities. As a post-doctoral fellow at
          the médialab, she leads the work on public participation in AI.
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Valentin Goujon
          </Typography>{' '}
          is a PhD student in sociology at the médialab, under the supervision of Dominique Cardon
          and Donato Ricci. He is interested in controversies about AI in France, especially those
          relating to computer vision and images.
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Yuliia Nikolaenko
          </Typography>{' '}
          is a research intern and AIRE Digital Sciences Master student at CRI. She is interested in
          NLP, data design and visualisation methods. She is working on text classification models
          and visualisation dashboards using Python.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Engagement;
