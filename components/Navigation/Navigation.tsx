'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';

import { menuItemProps } from './MenuItem/menuItemProps';
import MenuItem from './MenuItem';
import SocialMedia from './SocialMedia';
import Logo from './Logo';
import MobileMenuButton from './MobileMenuButton';
import { navigationMotionProps } from './navigationMotionProps';

/* Since the `menuItems`
 list is a static array that never changes and thereby does not need to be memorized,
 it does not need to be recreated every time the `navigation` component renders,
 so it was predefined outside the parent component and imported as a constant: */
const menuItemsList = (
  <>
    {menuItemProps.map((item) => (
      // Use a unique identifier,`href` or `link` to identify each `MenuItem` data:
      <MenuItem item={item} key={item.href ?? item.link} />
    ))}
    <li className={'ml-4 flex-col items-center md:flex md:flex-row md:space-x-10'}>
      <SocialMedia />
    </li>
  </>
);

export default function Navigation() {
  const [isShowing, setIsShowing] = useState(false);

  /* Memorize the `handleOnClick` function,
   thereby preserving its identity and preventing unnecessary re-renders of the `MobileMenuButton`
   child component: */
  const handleOnClick = useCallback(() => {
    setIsShowing((prevIsShowing) => !prevIsShowing);
  }, []);

  return (
    <header
      className={
        'fixed right-0 top-0 z-10 h-fit w-full bg-[#002F4D]/30 backdrop-blur lg:flex lg:items-center'
      }
    >
      <div className={'w-full lg:mx-2'}>
        <nav className={'lg:flex lg:items-center lg:justify-between'}>
          <div className={'flex items-center justify-between'}>
            <Logo />
            <MobileMenuButton menuIsOpened={isShowing} onClick={handleOnClick} />
          </div>
          <AnimatePresence>
            <m.ul
              className={`items-start md:items-center md:justify-center md:space-x-8 lg:flex ${
                isShowing ? 'flex flex-col md:flex-row' : 'hidden'
              }`}
              key={
                isShowing
                  ? // Mobile display
                    'flex flex-col md:flex-row'
                  : // Desktop display
                    'items-start md:items-center md:justify-center md:space-x-8 lg:flex'
              }
              {...(isShowing && navigationMotionProps)}
            >
              {menuItemsList}
            </m.ul>
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
