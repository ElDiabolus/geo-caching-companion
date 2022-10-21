import React, { lazy, Suspense } from 'react';

const LazyHash = lazy(() => import('./Hash'));

const Hash = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHash {...props} />
  </Suspense>
);

export default Hash;
