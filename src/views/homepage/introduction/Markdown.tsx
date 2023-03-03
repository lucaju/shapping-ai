/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
  filename: string;
}

export const Markdown = ({ filename }: MarkdownProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [content, setContent] = useState('');

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const response = await fetch(`./content/${filename}.md`);
    const text = await response.text();
    setContent(text);
  };

  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => null,
        h2: ({ node, ...props }) => (
          <Typography component="h2" variant={isMobile ? 'h5' : 'h3'} maxWidth="60ch" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <Typography component="h3" variant={isMobile ? 'subtitle1' : 'h6'} maxWidth="60ch"{...props}  />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
