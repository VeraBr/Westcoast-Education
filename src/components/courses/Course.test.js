import { render, screen } from '@testing-library/react';
import Course from './Course';

describe('Course', () => {
  const setup = () => render(<Course />);

  test('Heading', () => {
    setup();

    expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument();
  })
})