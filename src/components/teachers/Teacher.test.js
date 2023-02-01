import { render, screen } from '@testing-library/react';
import Teacher from './Teacher';

describe('Teacher', () => {
  const setup = () => render(<Teacher />);

  test('Heading', () => {
    setup();

    expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument();
  })
})