import React, { FC } from 'react';
import './SecondPage.scss';

interface SecondPageProps {}

const SecondPage: FC<SecondPageProps> = () => (
  <div className="SecondPage" data-testid="SecondPage">
    SecondPage Component
  </div>
);

export default SecondPage;
