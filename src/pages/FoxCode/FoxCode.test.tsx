import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FoxCode from './FoxCode';

describe('<FoxCode />', () => {
  test('it should mount', () => {
    render(<FoxCode />);
    
    const foxCode = screen.getByTestId('FoxCode');

    expect(foxCode).toBeInTheDocument();
  });
});