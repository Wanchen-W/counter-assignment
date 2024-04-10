// import necessary react testing library helpers here
// import the Counter component here
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from "../components/Counter.js";

beforeEach(() => {
    <Counter />;
  // Render the Counter component here
})

test('renders counter message', () => {
    const { getByText } = render(<Counter />);
    const counterMessage = getByText("Counter");
    expect(counterMessage).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
    const { getByText } = render(<Counter />);
   // const countValue = getByText("count");
    expect(getByText("count")).toHaveTextContent("0");
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
    const { getByTestId, getByText } = render(<Counter />);
   // const countValue = getByTestId("count");
   // const incrementButton = getByText("+");

    fireEvent.click(getByText("+"));

    expect(getByTestId("count")).toHaveTextContent("1");
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
    const { getByTestId, getByText } = render(<Counter />);
  //  const countValue = getByTestId("count");
  //  const decrementButton = getByText("-");

    fireEvent.click(getByText("-"));

    expect(getByTestId("count")).toHaveTextContent("-1");
  // Complete the unit test below based on the objective in the line above
});
