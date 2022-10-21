import React, { lazy, Suspense } from 'react';

const LazyAlphabetValues = lazy(() => import('./AlphabetValues'));

const AlphabetValues = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAlphabetValues {...props} />
  </Suspense>
);

export default AlphabetValues;
