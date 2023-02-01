import { render, screen } from '@testing-library/react';
import Home from './Home';



describe('Course api request', () => {
  const setup = () => render(<Home />);

  test('Render article if request works', async () => {
  
    setup();

    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: 1,
          courseNumber: 1,
          courseName: 'Svenska',
          length: '3 veckor',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          start: '01-02-2023',
        },
      ],
    });

    const courses = await screen.findAllByRole('article');

    expect(courses).not.toHaveLength(0);
  });
});