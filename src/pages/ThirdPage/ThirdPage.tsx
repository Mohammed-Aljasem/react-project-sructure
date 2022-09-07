import React, { FC } from 'react';
import './ThirdPage.scss';

interface ThirdPageProps {}

const ThirdPage: FC<ThirdPageProps> = () => (
  <div className="ThirdPage" data-testid="ThirdPage">
    ThirdPage Component
  </div>
);

export default ThirdPage;
