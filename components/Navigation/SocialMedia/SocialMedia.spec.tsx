import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SocialMedia from './SocialMedia';

jest.mock('next/link', () => {
  return ({ href, children }: { href: string; children: ReactNode }) => {
    return (
      <a href={href} rel={'noreferrer'} target={'_blank'}>
        {children}
      </a>
    );
  };
});

describe('SocialMedia Component', function () {
  // Test that the component renders:
  it('should render the component successfully', () => {
    render(<SocialMedia />);
    const socialMediaLinks = screen.getAllByRole('link');
    expect(socialMediaLinks).toHaveLength(2);
    socialMediaLinks.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });

  // Test that a new tab opens whenever any of the respective social media logomarks gets clicked:
  it('should open a new tab whenever any of the respective social media logomarks gets clicked', async () => {
    const user = userEvent.setup();
    render(<SocialMedia />);
    const socialMediaLinks: HTMLAnchorElement[] = screen.getAllByRole('link');
    const [linkedInLink, gitHubLink] = socialMediaLinks;
    await user.click(linkedInLink);
    expect(linkedInLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/michael-johnson-88ba77a8/',
    );
    expect(linkedInLink).toHaveAttribute('target', '_blank');
    await user.click(gitHubLink);
    expect(gitHubLink).toHaveAttribute('href', 'https://github.com/MichaelJohnson144');
    expect(gitHubLink).toHaveAttribute('target', '_blank');
  });
});
