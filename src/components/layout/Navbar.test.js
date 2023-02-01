import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  const setup = () => render(<BrowserRouter><Navbar /></BrowserRouter>);

  test('Nav element exist', () => {
    setup();

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  })

  test('h1 exist', () => {
    setup();

    expect(screen.getByRole('heading', {level: 1})).toBeInTheDocument();
  })
})