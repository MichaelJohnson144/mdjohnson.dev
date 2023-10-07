import { render, screen } from '@testing-library/react';

import Navigation from './Navigation';

describe('Navigation Component', function () {
  // Test that the component renders:
  it('should render the component successfully', () => {
    render(<Navigation />);
    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();
  });
});
