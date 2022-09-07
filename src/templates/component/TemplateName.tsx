import React, { FC } from 'react';
import './TemplateName.scss';
import PropTypes from 'prop-types';

interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = () => {
  return (
    <div className='TemplateName' data-testid='TemplateName'>
      TemplateName Component
    </div>
  );
};

TemplateName.propTypes = {};

export default TemplateName;
