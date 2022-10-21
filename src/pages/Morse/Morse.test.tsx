import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Morse from './Morse';

describe('<Morse />', () => {
  test('it should mount', () => {
    render(<Morse />);
    
    const morse = screen.getByTestId('Morse');

    expect(morse).toBeInTheDocument();
  });
});