import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hash from './Hash';

describe('<Hash />', () => {
  test('it should mount', () => {
    render(<Hash />);
    
    const hash = screen.getByTestId('Hash');

    expect(hash).toBeInTheDocument();
  });
});