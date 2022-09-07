import React, { FC } from 'react';
import './Checkbox.scss';
import PropTypes from 'prop-types';

interface CheckboxProps {}

const Checkbox: FC<CheckboxProps> = () => {
  return (
    <div className='Checkbox' data-testid='Checkbox'>
      Checkbox Component
    </div>
  );
};

Checkbox.propTypes = {};

export default Checkbox;
