import React, { lazy, Suspense } from 'react';

const LazyQuadraticEquation = lazy(() => import('./QuadraticEquation'));

const QuadraticEquation = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyQuadraticEquation {...props} />
  </Suspense>
);

export default QuadraticEquation;
