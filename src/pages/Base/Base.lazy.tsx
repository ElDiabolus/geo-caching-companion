import React, { lazy, Suspense } from 'react';

const LazyBase = lazy(() => import('./Base'));

const Base = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBase {...props} />
  </Suspense>
);

export default Base;
