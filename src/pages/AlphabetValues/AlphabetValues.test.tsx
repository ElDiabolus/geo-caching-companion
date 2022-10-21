import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AlphabetValues from './AlphabetValues';

describe('<AlphabetValues />', () => {
  test('it should mount', () => {
    render(<AlphabetValues />);
    
    const alphabetValues = screen.getByTestId('AlphabetValues');

    expect(alphabetValues).toBeInTheDocument();
  });
});