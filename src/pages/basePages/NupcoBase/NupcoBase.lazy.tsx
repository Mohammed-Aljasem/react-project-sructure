import React, { lazy, Suspense } from 'react';

const LazyNupcoBase = lazy(() => import('./NupcoBase'));

const NupcoBase = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNupcoBase {...props} />
  </Suspense>
);

export default NupcoBase;
