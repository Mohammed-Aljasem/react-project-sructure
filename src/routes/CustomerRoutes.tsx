import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SecondPage from '@pages/SecondPage/SecondPage.lazy';
import ThirdPage from '@pages/ThirdPage/ThirdPage.lazy';
import CustomerBase from '@pages/basePages/CustomerBase/CustomerBase.lazy';

function CustomerRoutes() {
  return (
    <>
      <Routes>
        <Route path='/customer' element={<CustomerBase />}>
          <Route path='second-page' element={<SecondPage />} />
          <Route path='third-page' element={<ThirdPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default CustomerRoutes;
