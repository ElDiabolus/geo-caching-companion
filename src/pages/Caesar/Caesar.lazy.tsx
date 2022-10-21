import React, { lazy, Suspense } from 'react';

const LazyCaesar = lazy(() => import('./Caesar'));

const Caesar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCaesar {...props} />
  </Suspense>
);

export default Caesar;
