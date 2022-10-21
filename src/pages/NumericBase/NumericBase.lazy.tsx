import React, {lazy, Suspense} from 'react';

const LazyNumericBase = lazy(() => import('./NumericBase'));

const NumericBase = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
    <Suspense fallback={null}>
        <LazyNumericBase {...props} />
    </Suspense>
);

export default NumericBase;
