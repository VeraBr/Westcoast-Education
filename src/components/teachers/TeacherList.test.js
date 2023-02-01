import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TeacherList from './TeacherList';

describe('Teacher list', () => {
  const setup = () => render(<TeacherList />);

  test('Have a button', () => {
    setup();

    expect(screen.getByRole('button')).toBeInTheDocument();
  })

  test('Button text', () => {
    setup();

    const btn = screen.getByRole('button')
    expect(btn).toHaveTextContent('Lägg till lärare');

  })
})