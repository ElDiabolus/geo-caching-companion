import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ComplexNumbers from './ComplexNumbers';

describe('<ComplexNumbers />', () => {
    test('it should mount', () => {
        render(<ComplexNumbers/>);

        const complexNumbers = screen.getByTestId('ComplexNumbers');

        expect(complexNumbers).toBeInTheDocument();
    });
});