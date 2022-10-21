import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Atbash from './Atbash';

describe('<Atbash />', () => {
  test('it should mount', () => {
    render(<Atbash />);
    
    const atbash = screen.getByTestId('Atbash');

    expect(atbash).toBeInTheDocument();
  });
});