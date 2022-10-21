import React, { lazy, Suspense } from 'react';

const LazyMorse = lazy(() => import('./Morse'));

const Morse = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMorse {...props} />
  </Suspense>
);

export default Morse;
