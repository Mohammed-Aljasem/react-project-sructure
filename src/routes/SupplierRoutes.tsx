import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SecondPage from '@pages/SecondPage/SecondPage.lazy';
import ThirdPage from '@pages/ThirdPage/ThirdPage.lazy';
import SupplierBase from '@pages/basePages/SupplierBase/SupplierBase.lazy';

function SupplierRoutes() {
  return (
    <>
      <Routes>
        <Route path='/supplier' element={<SupplierBase />}>
          <Route path='second-page' element={<SecondPage />} />
          <Route path='third-page' element={<ThirdPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default SupplierRoutes;
