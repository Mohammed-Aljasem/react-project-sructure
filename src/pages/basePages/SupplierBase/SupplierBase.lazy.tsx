import React, { lazy, Suspense } from 'react';

const LazySupplierBase = lazy(() => import('./SupplierBase'));

const SupplierBase = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySupplierBase {...props} />
  </Suspense>
);

export default SupplierBase;
