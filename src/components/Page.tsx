import { useAppState } from '@src/overmind';
import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';

interface PageProps {
  title?: string;
}

const Page = forwardRef<PageProps, any>(({ children, title = '', ...rest }, ref) => {
  const { appName } = useAppState();

  return (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{`${appName} - ${title}`}</title>
      </Helmet>
      {children}
    </div>
  );
});

export default Page;
