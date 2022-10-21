import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RomanNumbers from './RomanNumbers';

describe('<RomanNumbers />', () => {
  test('it should mount', () => {
    render(<RomanNumbers />);
    
    const romanNumbers = screen.getByTestId('RomanNumbers');

    expect(romanNumbers).toBeInTheDocument();
  });
});