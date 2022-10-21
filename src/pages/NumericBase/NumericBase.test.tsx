import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NumericBase from './NumericBase';

describe('<NumericBase />', () => {
    test('it should mount', () => {
        render(<NumericBase/>);

        const numericBase = screen.getByTestId('NumericBase');

        expect(numericBase).toBeInTheDocument();
    });
});