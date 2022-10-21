import React, { lazy, Suspense } from 'react';

const LazyCipherDisk = lazy(() => import('./CipherDisk'));

const CipherDisk = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCipherDisk {...props} />
  </Suspense>
);

export default CipherDisk;
