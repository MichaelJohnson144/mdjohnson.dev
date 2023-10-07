import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer UI Component', function () {
  // Test that the component renders:
  it('should render the component successfully', () => {
    render(<Footer />);
    const footer = screen.getByText('© 2023 Michael Johnson. All Rights Reserved.');
    expect(footer).toBeInTheDocument();
  });
});
