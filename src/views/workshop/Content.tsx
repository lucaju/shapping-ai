/* eslint-disable @typescript-eslint/no-unused-vars */
import { alpha, Link, ListItem, Paper, Typography, useTheme } from '@mui/material';
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ContentProps {
  children: string;
}

export const Content = ({ children }: ContentProps) => {
  const { palette } = useTheme();

  return (
    <Paper
      elevation={palette.mode === 'dark' ? 4 : 1}
      sx={{ mt: 10, p: 6, bgcolor: alpha(palette.background.paper, 0.4) }}
    >
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => <Typography component="h1" mb={3} variant="h3" {...props} />,
          h2: ({ node, ...props }) => (
            <Typography component="h2" mb={3} mt={2} variant="h5" {...props} />
          ),
          h3: ({ node, ...props }) => <Typography component="h3" mb={3} variant="h5" {...props} />,
          h4: ({ node, ...props }) => (
            <Typography component="h4" mb={3} variant="subtitle1" {...props} />
          ),
          h5: ({ node, ...props }) => (
            <Typography component="h5" mb={3} variant="subtitle1" {...props} />
          ),
          h6: ({ node, ...props }) => (
            <Typography component="h6" mb={3} variant="subtitle1" {...props} />
          ),
          p: ({ node, ...props }) => <Typography variant="body1" {...props} paragraph />,
          a: ({ node, ...props }) => (
            <Link underline="hover" target="_blank" rel="noopener noreferrer" {...props} />
          ),
          li: ({ node, ordered, ...props }) => (
            //@ts-ignore
            <ListItem {...props} ordered={ordered ? 'true' : 'false'} />
          ),
          img: ({ src, title, ...props }) => (
            <img
              src={`/content/workshop/images/${src}`}
              title={title}
              style={{ maxWidth: '100%', marginTop: '8px', marginBottom: '8px' }}
              {...props}
            />
          ),
          code: ({ node, inline, ...props }) => (
            //@ts-ignore
            <Typography
              component="span"
              inline={inline ? 'true' : 'false'}
              variant="body1"
              sx={{
                px: 0.5,
                fontFamily: 'monospace',
                borderRadius: 1,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: ({ palette }) =>
                  palette.mode === 'dark' ? palette.grey[700] : palette.grey[400],
                backgroundColor: ({ palette }) =>
                  palette.mode === 'dark' ? palette.grey[800] : palette.grey[100],
              }}
              {...props}
            />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </Paper>
  );
};
