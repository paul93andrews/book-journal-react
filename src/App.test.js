import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

const generateGreeting = (name) => `Hello ${name}!`;

test('should print a string with argument as name', () => {
  const result = generateGreeting('Paul');

  expect(result).toBe('Hello Paul!')
});