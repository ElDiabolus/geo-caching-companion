import React, { lazy, Suspense } from 'react';

const LazyFoxCode = lazy(() => import('./FoxCode'));

const FoxCode = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFoxCode {...props} />
  </Suspense>
);

export default FoxCode;
