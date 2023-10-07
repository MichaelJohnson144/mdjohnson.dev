import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MyWebsiteFrontEnd from './MyWebsiteFrontEnd';
import { myWebsiteFrontEndTechStack } from 'TechStack/utils/myWebsiteFrontEndTechStack';

jest.mock('next/link', () => {
  return ({ href, children }: { href: string; children: ReactNode }) => {
    return (
      <a href={href} rel={'noreferrer'} target={'_blank'}>
        {children}
      </a>
    );
  };
});

jest.mock('next/image', () => {
  return ({ alt }: { alt: string }) => {
    return (
      <picture>
        <img alt={alt} />
      </picture>
    );
  };
});

jest.mock('../utils/myWebsiteFrontEndTechStack', () => ({
  myWebsiteFrontEndTechStack: [
    {
      name: 'mockName',
      link: 'https://mockLink',
      imageSrc: '/path/to/mockImageSrc',
    },
    {
      name: 'mockName-one',
      link: 'https://mockLink-one',
      imageSrc: '/path/to/mockImageSrc-one',
    },
  ],
}));

describe('MyWebsiteFrontEnd Component', function () {
  // Test that the component renders:
  it('should render the component successfully', () => {
    render(<MyWebsiteFrontEnd />);
    myWebsiteFrontEndTechStack.forEach((frontEndTechnology) => {
      const technology = screen.getByAltText(frontEndTechnology.name);
      expect(technology).toBeInTheDocument();
    });
  });

  // Test that a new tab opens whenever any of the respective technology logomarks gets clicked:
  it('should open a new tab whenever any of the respective technology logomarks gets clicked', async () => {
    const user = userEvent.setup();

    render(<MyWebsiteFrontEnd />);
    await Promise.all(
      myWebsiteFrontEndTechStack.map(async (myWebsiteFrontEndTechnology) => {
        const technologyImage = screen.getByAltText(myWebsiteFrontEndTechnology.name);
        const technologyLink = screen.getByRole('link', {
          name: myWebsiteFrontEndTechnology.name,
        });
        expect(technologyImage).toBeInTheDocument();
        if (technologyLink) {
          await user.click(technologyLink);
          expect(technologyLink).toHaveAttribute('href', myWebsiteFrontEndTechnology.link);
          expect(technologyLink).toHaveAttribute('target', '_blank');
        } else {
          throw new Error(`404 Not Found: ${myWebsiteFrontEndTechnology.name}`);
        }
      }),
    );
  });
});
