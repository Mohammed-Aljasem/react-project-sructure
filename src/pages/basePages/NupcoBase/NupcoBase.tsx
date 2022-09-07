import React, { FC } from 'react';
import './NupcoBase.scss';
import { Outlet } from 'react-router-dom';

interface NupcoBaseProps {}

const NupcoBase: FC<NupcoBaseProps> = () => (
  <div className='NupcoBase' data-testid='NupcoBase'>
    -- Nupco header --
    <Outlet />
  </div>
);

export default NupcoBase;
