import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';

import MenuItem, { MenuItemRecord } from './MenuItem';

jest.mock('next/link', () => {
  return ({ href, children }: { href: string; children: ReactNode }) => {
    return <a href={href}>{children}</a>;
  };
});

const menuItemData: MenuItemRecord = {
  href: 'test-href',
  link: 'test-link',
  label: 'testLabel',
};

describe('MenuItem Component', function () {
  // Test that the component renders:
  it('should render the component successfully', () => {
    render(<MenuItem item={menuItemData} />);
    const menuItem = screen.getByRole('link');
    expect(menuItem).toBeInTheDocument();
  });

  // Test the `item` prop:
  it('should render the items successfully', () => {
    render(<MenuItem item={menuItemData} />);
    const menuItem: HTMLAnchorElement = screen.getByRole('link', {
      name: menuItemData.label,
    });
    expect(menuItem).toBeInTheDocument();
    const menuItemURL = new URL(menuItem.href).pathname;
    expect(menuItemURL).toBe(`/${menuItemData.href}`);
  });
});
