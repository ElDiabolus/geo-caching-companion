import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Range from './Range';

describe('<Range />', () => {
  test('it should mount', () => {
    render(<Range />);
    
    const range = screen.getByTestId('Range');

    expect(range).toBeInTheDocument();
  });
});