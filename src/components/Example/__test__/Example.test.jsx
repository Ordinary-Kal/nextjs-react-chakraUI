const { render, screen } = require('@testing-library/react');
import Example from '@/components/Example/Example';

describe('Example', () => {
  test('Example Text', () => {
    render(<Example />);

    const exampleElement = screen.getByTestId('title');
    expect(exampleElement).toBeInTheDocument();
  });
});
