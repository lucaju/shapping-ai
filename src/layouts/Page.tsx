import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet-async';

interface PageProps {
  title?: string;
}

const SITE_TITLE = 'Shapping AI';

// eslint-disable-next-line react/display-name
export const Page = forwardRef<PageProps, any>(({ children, title, ...rest }, ref) => {
  let pageTitle = `${SITE_TITLE}`;
  if (title) pageTitle = `${pageTitle} - ${title}`;

  return (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{pageTitle}</title>
        <base href="/" />
      </Helmet>
      {children}
    </div>
  );
});
