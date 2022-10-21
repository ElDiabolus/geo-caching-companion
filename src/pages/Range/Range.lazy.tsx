import React, { lazy, Suspense } from 'react';

const LazyRange = lazy(() => import('./Range'));

const Range = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRange {...props} />
  </Suspense>
);

export default Range;
