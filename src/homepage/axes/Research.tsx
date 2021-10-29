import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';

const Research: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack id="research" spacing={4} alignItems="center">
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
      <Typography align="center" component="h2" maxWidth="9ch" variant={isMobile ? 'h3' : 'h1'}>
        Research
      </Typography>
      <Stack spacing={2} alignItems="left">
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          Debates in AI research can be expected to exert an important influence on the formation of
          public discourse about AI. In the last years, knowledge claims about the unprecedented,
          revolutionary, capacities of machine learning systems to detect patterns in data at scale
          have been invoked as a key driver of change across science, policy and media debates. Many
          of the AI controversies that have occurred across these spheres centre on the impact of
          science and innovation – from facial recognition to autonomous vehicles - on society. But
          what about controversies within and about AI research itself? What concerns have recent
          developments in AI raised among research communities in the UK, Germany, France and
          Canada? Are the issues identified by computer scientists the same or different to those
          raised by social science and humanities scholars? And to what extent do wider communities
          of expertise – policy-makers, legal experts, ethicists, activists and citizens concerned
          with AI - engage with AI knowledge claims?
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          The UK team for Shaping AI will map controversies in and about AI research across the
          sciences, humanities and extended peer communities (Funtowicz and Ravetz, 1993). Combining
          digital methods of issue mapping (social media & Web analysis, scientometrics) with
          ethnographic engagement with AI research, we will use network and textual analysis to
          identify actors, objects and concerns animating controversies in AI research in the
          relevant period (Marres, 2015). In doing so, our aim is to develop a contextual
          understanding of the knowledge propositions that organise – and/or fail to organise -
          controversies in and about AI research across different fields of expertise, and to
          contribute to Shaping AI&apos;s wider investigation as to whether distinctive modes of
          problematization are detectable in AI controversies (Roberge & Castelle, 2021).
        </Typography>
      </Stack>
      <Stack spacing={2} alignItems="left">
        <Typography component="p" variant={isMobile ? 'subtitle1' : 'h6'} sx={{ fontWeight: 700 }}>
          Team UK
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Noortje Marres
          </Typography>{' '}
          Noortje Marres is Professor in Science, Technology and Society (STS) in the Centre for
          Interdisciplinary Methodologies, University of Warwick and Principal Investigator on the
          Shaping AI project. She has been a key contributor to the development of controversy
          analysis as an interdisciplinary method, including through her ESRC-funded research on
          Issue Mapping as Participatory Method. Noortje has published two monographs, Material
          Participation (Palgrave, 2012) and Digital Sociology (Polity, 2017) and besides her work
          on Shaping AI, she is currently conducting research on real-world testing of intelligent
          vehicles as part of her Leverhulme Fellowship &quot;Beyond the Lab&quot; (2022-2023).
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Michael Castelle
          </Typography>{' '}
          is Assistant Professor in the Centre for Interdisciplinary Methodologies at the University
          of Warwick, and a Co-Investigator on the Shaping AI project. His research is at the
          intersection of the economic sociology of markets and platforms, the history of late
          20th-century computing, and Science and Technology Studies. Michael has a
          multidisciplinary academic background in sociology, computer science, and computational
          neuroscience/neurology. He received his PhD from the Department of Sociology at the
          University of Chicago, for his doctoral thesis “Transaction and Message: From Database to
          Marketplace, 1970-2000.” At the University of Warwick, Michael is convenor of the MSc Big
          Data and Digital Futures, and he has recently published a number of articles and book
          chapters on the Sociology of Deep Learning.
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            James Tripp
          </Typography>{' '}
          is a Senior Research Software Engineer at the University of Warwick and Senior
          Technologist on the Shaping AI project. He has a PhD in Cognitive Science and supports
          both research and teaching at the Centre for Interdisciplinary Methodologies (CIM) through
          writing research software, managing and deploying Linux server infrastructure and both the
          design and delivery of technical workshops covering diverse computational methods.
        </Typography>
        <Typography component="p" variant={isMobile ? 'body1' : 'subtitle1'}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Chiara Poletti
          </Typography>{' '}
          is a Post-Doctoral Research Assistant at the Centre for Interdisciplinary Methodologies
          (CIM), University of Warwick and on the Shaping AI project. She received her PhD in
          Sociology from the University of Cardiff. Her doctoral research project applied methods of
          controversy mapping to study the governance of speech online and her current research
          explores the ways in which sociology and social research can inform the study of AI.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Research;
