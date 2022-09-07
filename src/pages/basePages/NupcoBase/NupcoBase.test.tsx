import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NupcoBase from './NupcoBase';

describe('<NupcoBase />', () => {
  test('it should mount', () => {
    render(<NupcoBase />);
    
    const nupcoBase = screen.getByTestId('NupcoBase');

    expect(nupcoBase).toBeInTheDocument();
  });
});