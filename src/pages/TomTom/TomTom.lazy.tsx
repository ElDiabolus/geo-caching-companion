import React, { lazy, Suspense } from 'react';

const LazyTomTom = lazy(() => import('./TomTom'));

const TomTom = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTomTom {...props} />
  </Suspense>
);

export default TomTom;
