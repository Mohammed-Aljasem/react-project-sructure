import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SupplierBase from './SupplierBase';

describe('<SupplierBase />', () => {
  test('it should mount', () => {
    render(<SupplierBase />);
    
    const supplierBase = screen.getByTestId('SupplierBase');

    expect(supplierBase).toBeInTheDocument();
  });
});