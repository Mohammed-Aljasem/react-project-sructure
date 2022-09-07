import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import SupplierRoutes from '@routes/SupplierRoutes';
import NupcoRoutes from './NupcoRoutes';
import CustomerRoutes from './CustomerRoutes';

function AppRoutes() {
  return (
    <BrowserRouter>
      <SupplierRoutes />
      <NupcoRoutes />
      <CustomerRoutes />
    </BrowserRouter>
  );
}

export default AppRoutes;
