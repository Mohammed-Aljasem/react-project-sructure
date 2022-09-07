import React, { lazy, Suspense } from 'react';

const LazySecondPage = lazy(() => import('./SecondPage'));

const SecondPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySecondPage {...props} />
  </Suspense>
);

export default SecondPage;
