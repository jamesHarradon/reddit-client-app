import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/app/store';

test('renders search button', () => {
  render(<Provider store={store}><App /></Provider>);
  const searchBtn = screen.getByRole('button')
  expect(searchBtn).toBeInTheDocument();
});
