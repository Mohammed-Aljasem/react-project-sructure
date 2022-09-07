import React, { FC } from 'react';
import './CustomerBase.scss';
import { Outlet } from 'react-router-dom';
interface CustomerBaseProps {}

const CustomerBase: FC<CustomerBaseProps> = () => (
  <div className='CustomerBase' data-testid='CustomerBase'>
    -- customer header --
    <Outlet />
  </div>
);

export default CustomerBase;
