import React, { lazy, Suspense } from 'react';

const LazyAtbash = lazy(() => import('./Atbash'));

const Atbash = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAtbash {...props} />
  </Suspense>
);

export default Atbash;
