import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter.js'; // Adjust the path accordingly

let component;

beforeEach(() => {
    component = render(<Counter />);
});

test('renders counter message', () => {
    const { getByText } = component;
    const counterMessage = getByText('Counter');
    expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    const { getByTestId } = component;
    const countValue = getByTestId('count'); // Look for element with data-testid="count"
    expect(countValue.textContent).toBe('0');
});

test('clicking + increments the count', () => {
    const { getByTestId, getByText } = component;
    const countValue = getByTestId('count');
    const incrementButton = getByText('+');

    fireEvent.click(incrementButton);

    expect(countValue.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
    const { getByTestId, getByText } = component;
    const countValue = getByTestId('count');
    const decrementButton = getByText('-');

    fireEvent.click(decrementButton);

    expect(countValue.textContent).toBe('-1');
});
