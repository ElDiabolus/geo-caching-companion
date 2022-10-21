import React, {lazy, Suspense} from 'react';

const LazyComplexNumbers = lazy(() => import('./ComplexNumbers'));

const ComplexNumbers = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
    <Suspense fallback={null}>
        <LazyComplexNumbers {...props} />
    </Suspense>
);

export default ComplexNumbers;
