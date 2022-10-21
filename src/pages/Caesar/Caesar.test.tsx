import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Caesar from './Caesar';

describe('<Caesar />', () => {
  test('it should mount', () => {
    render(<Caesar />);
    
    const caesar = screen.getByTestId('Caesar');

    expect(caesar).toBeInTheDocument();
  });
});