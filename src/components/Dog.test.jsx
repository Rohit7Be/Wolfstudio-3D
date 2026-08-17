import { render, screen } from '@testing-library/react';
import Dog from './Dog';

describe('Dog Component', () => {
  test('renders Dog component', () => {
    render(<Dog />);
    const dogElement = screen.getByText(/dog/i);
    expect(dogElement).toBeInTheDocument();
  });
});