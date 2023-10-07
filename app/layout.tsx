import 'app/global.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import Navigation from 'components/Navigation';

config.autoAddCss = false;

export const metadata: Metadata = {
  description: "Hi, I'm Michael, a Full-Stack Developer",
  title: 'mdjohnson',
};

interface RootLayoutProp {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProp) {
  return (
    <html lang={'en'}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
