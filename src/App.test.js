import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App routing', () => {
  const setup = () => render(<App />);

  test('Navigate to correct page', async () => {
    setup();

    await userEvent.click(screen.getByText('Kurser'));
    expect(screen.getByText('Lägg till kurs')).toBeInTheDocument();
  })
})
