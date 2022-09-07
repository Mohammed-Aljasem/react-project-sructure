import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SecondPage from '@pages/SecondPage/SecondPage.lazy';
import ThirdPage from '@pages/ThirdPage/ThirdPage.lazy';
import NupcoBase from '@pages/basePages/NupcoBase/NupcoBase.lazy';

function NupcoRoutes() {
  return (
    <>
      <Routes>
        <Route path='/nupco' element={<NupcoBase />}>
          <Route path='second-page' element={<SecondPage />} />
          <Route path='third-page' element={<ThirdPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default NupcoRoutes;
