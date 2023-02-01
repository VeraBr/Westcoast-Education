import { render, screen } from '@testing-library/react';
import AddTeacher from './AddTeacher';

describe('Add teacher', () => {
  const setup = () => render(<AddTeacher />);

  test('Check label', () => {
    setup();

    expect(screen.getByLabelText('Personnummer')).toBeInTheDocument();
  })
})