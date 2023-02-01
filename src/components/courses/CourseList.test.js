import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CourseList from './CourseList';

describe('Course list', () => {
  const setup = () => render(<BrowserRouter><CourseList /></BrowserRouter>);

  test('Have a button', () => {
    setup();

    expect(screen.getByRole('button')).toBeInTheDocument();
  })

  test('Button text', () => {
    setup();

    const btn = screen.getByRole('button')
    expect(btn).toHaveTextContent('Lägg till kurs');

  })
})
