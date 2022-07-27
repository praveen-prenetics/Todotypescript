import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



describe('snapshot testing for App page', () => {
  it('should render', () => {
    const view = render(<App />);
    expect(view).toMatchSnapshot();
  });
});