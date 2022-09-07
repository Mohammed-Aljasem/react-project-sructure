import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomerBase from './CustomerBase';

describe('<CustomerBase />', () => {
  test('it should mount', () => {
    render(<CustomerBase />);
    
    const customerBase = screen.getByTestId('CustomerBase');

    expect(customerBase).toBeInTheDocument();
  });
});