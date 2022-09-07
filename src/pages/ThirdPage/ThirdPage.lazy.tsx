import React, { lazy, Suspense } from 'react';

const LazyThirdPage = lazy(() => import('./ThirdPage'));

const ThirdPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyThirdPage {...props} />
  </Suspense>
);

export default ThirdPage;
