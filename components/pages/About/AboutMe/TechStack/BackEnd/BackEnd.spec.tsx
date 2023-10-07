import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import BackEnd from './BackEnd';
import { backEndTechStack } from '../utils/backEndTechStack';

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

jest.mock('../utils/backEndTechStack', () => ({
  backEndTechStack: [
    {
      name: 'mockName',
      link: 'https://mockLink',
      imageSrc: '/path/to/mockImageSrc',
      progressBarLimit: 'mockProgressBarLimit',
      gradientColorFrom: 'mockGradientColorFrom',
      gradientColorTo: 'mockGradientColorTo',
      textColor: 'mockTextColor',
      progress: 'mockProgress',
    },
    {
      name: 'mockName-one',
      link: 'https://mockLink-one',
      imageSrc: '/path/to/mockImageSrc-one',
      progressBarLimit: 'mockProgressBarLimit-one',
      gradientColorFrom: 'mockGradientColorFrom-one',
      gradientColorTo: 'mockGradientColorTo-one',
      textColor: 'mockTextColor-one',
      progress: 'mockProgress-one',
    },
  ],
}));

describe('BackEnd Component', () => {
  // Test that the component renders:
  it('should render the component successfully', () => {
    render(<BackEnd />);
    backEndTechStack.forEach((backEndTechnology) => {
      const technology = screen.getByAltText(backEndTechnology.name);
      expect(technology).toBeInTheDocument();
    });
  });

  // Test that a new tab opens whenever any of the respective technology logomarks gets clicked:
  it('should open a new tab whenever any of the respective technology logomarks gets clicked', async () => {
    const user = userEvent.setup();

    render(<BackEnd />);
    await Promise.all(
      backEndTechStack.map(async (backEndTechnology) => {
        const technologyImage = screen.getByAltText(backEndTechnology.name);
        const technologyLink = screen.getByRole('link', { name: backEndTechnology.name });
        expect(technologyImage).toBeInTheDocument();
        if (technologyLink) {
          await user.click(technologyLink);
          expect(technologyLink).toHaveAttribute('href', backEndTechnology.link);
          expect(technologyLink).toHaveAttribute('target', '_blank');
        } else {
          throw new Error(`404 Not Found: ${backEndTechnology.name}`);
        }
      }),
    );
  });
});
