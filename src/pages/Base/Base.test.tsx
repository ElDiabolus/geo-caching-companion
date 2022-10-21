import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Base from './Base';

describe('<Base />', () => {
  test('it should mount', () => {
    render(<Base />);
    
    const base = screen.getByTestId('Base');

    expect(base).toBeInTheDocument();
  });
});