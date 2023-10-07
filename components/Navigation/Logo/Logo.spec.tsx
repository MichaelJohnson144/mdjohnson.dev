import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';

import Logo from './Logo';

jest.mock('next/link', () => {
  return ({ href, children }: { href: string; children: ReactNode }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('Logo Component', function () {
  // Test that the component renders:
  it('should render the component successfully', () => {
    render(<Logo />);
    const logo = screen.getByRole('link');
    expect(logo).toBeInTheDocument();
  });
});
