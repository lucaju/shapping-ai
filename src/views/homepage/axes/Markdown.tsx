/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
  filename: string;
}

export const Markdown = ({ filename }: MarkdownProps) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const response = await fetch(`./content/axes/${filename}.md`);
    const text = await response.text();
    setContent(text);
  };

  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => null,
        h2: ({ node, ...props }) => (
          <Typography
            component="h2"
            mb={3}
            mt={2}
            variant="h5"
            sx={{ fontWeight: 700 }}
            {...props}
          />
        ),
        p: ({ node, ...props }) => (
          <Typography variant="body1" {...props} paragraph lineHeight={1.75} />
        ),
        a: ({ node, ...props }) => (
          <Link
            color="secondary"
            target="_blank"
            rel="noopener"
            {...props}
            sx={{ fontWeight: 700 }}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
