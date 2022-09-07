import React, { lazy, Suspense } from 'react';

const LazyCustomerBase = lazy(() => import('./CustomerBase'));

const CustomerBase = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCustomerBase {...props} />
  </Suspense>
);

export default CustomerBase;
