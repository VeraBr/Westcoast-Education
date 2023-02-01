import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddCourse from './AddCourse';

describe('Add course', () => {
  const setup = () => render(<AddCourse />);

  test('Check label', () => {
    setup();

    expect(screen.getByLabelText('Kursnummer')).toBeInTheDocument();
  })
})
