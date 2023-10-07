import { MouseEventHandler } from 'react';
import { MenuOpenRounded, MenuRounded } from '@mui/icons-material';

import Button from 'ui/Button';

interface MobileMenuButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  menuIsOpened?: boolean;
}

export default function MobileMenuButton({ onClick, menuIsOpened }: MobileMenuButtonProps) {
  return (
    <Button
      aria-label={'Toggle between the mobile menu navigation states'}
      className={'h-[52px] w-[52px] rounded-full !p-0 text-white lg:hidden'}
      id={'mobileMenuButton'}
      name={'mobileMenuButton'}
      onClick={onClick}
      variant={null}
    >
      {menuIsOpened ? (
        <MenuOpenRounded className={'!text-4xl'} />
      ) : (
        <MenuRounded className={'!text-4xl'} />
      )}
    </Button>
  );
}
