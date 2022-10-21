import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TomTom from './TomTom';

describe('<TomTom />', () => {
  test('it should mount', () => {
    render(<TomTom />);
    
    const tomTom = screen.getByTestId('TomTom');

    expect(tomTom).toBeInTheDocument();
  });
});