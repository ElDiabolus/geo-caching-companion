import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CipherDisk from './CipherDisk';

describe('<CipherDisk />', () => {
  test('it should mount', () => {
    render(<CipherDisk />);
    
    const cipherDisk = screen.getByTestId('CipherDisk');

    expect(cipherDisk).toBeInTheDocument();
  });
});