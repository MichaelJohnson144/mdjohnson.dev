import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MobileMenuButton from './MobileMenuButton';

describe('MobileMenuButton Component', function () {
  const fn = jest.fn();
  const state = false;
  const user = userEvent.setup();

  // Test that the component renders:
  it('should render the component successfully', () => {
    render(<MobileMenuButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  // Test the `onClick` prop:
  it('Should not fire onClick upon initial page load successfully', () => {
    render(<MobileMenuButton onClick={fn} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(fn).not.toHaveBeenCalled();
  });

  it('can fire onClick successfully', async () => {
    render(<MobileMenuButton onClick={fn} />);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  // Test the `menuIsOpened` prop:
  it('renders the default mobile menu icon on the mobile display successfully', () => {
    render(<MobileMenuButton menuIsOpened={state} />);
    const defaultMobileMenuIcon = screen.getByRole('button');
    expect(defaultMobileMenuIcon).toBeInTheDocument();
  });

  it('renders the opened mobile menu icon after its default counterparts get clicked by a user on the mobile display successfully', async () => {
    render(<MobileMenuButton menuIsOpened={state} onClick={fn} />);
    const defaultMobileMenuIcon = screen.getByRole('button');
    expect(defaultMobileMenuIcon).toBeInTheDocument();
    await user.click(defaultMobileMenuIcon);
    expect(fn).toHaveBeenCalledTimes(1);
    const openMobileMenuIcon = screen.getByRole('button');
    expect(openMobileMenuIcon).toBeInTheDocument();
  });
});
