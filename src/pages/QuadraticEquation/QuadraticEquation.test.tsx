import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuadraticEquation from './QuadraticEquation';

describe('<QuadraticEquation />', () => {
  test('it should mount', () => {
    render(<QuadraticEquation />);
    
    const quadraticEquation = screen.getByTestId('QuadraticEquation');

    expect(quadraticEquation).toBeInTheDocument();
  });
});