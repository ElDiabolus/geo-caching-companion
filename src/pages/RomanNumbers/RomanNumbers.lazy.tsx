import React, { lazy, Suspense } from 'react';

const LazyRomanNumbers = lazy(() => import('./RomanNumbers'));

const RomanNumbers = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRomanNumbers {...props} />
  </Suspense>
);

export default RomanNumbers;
