import React, { FC } from 'react';
import './SupplierBase.scss';
import { Outlet } from 'react-router-dom';

interface SupplierBaseProps {}

const SupplierBase: FC<SupplierBaseProps> = () => (
  <div className='SupplierBase' data-testid='SupplierBase'>
    -- supplier header --
    <Outlet />
  </div>
);

export default SupplierBase;
