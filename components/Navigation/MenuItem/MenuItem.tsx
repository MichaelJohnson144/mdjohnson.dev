import Link from 'next/link';

export interface MenuItemRecord {
  href?: string;
  link: string;
  label: string;
}

interface MenuItemProp {
  item: MenuItemRecord;
}

export default function MenuItem({ item }: MenuItemProp) {
  return (
    <li>
      <Link href={item.href ? item.href : `/${item.link}`}>
        <p
          className={
            'my-1.5 ml-2 rounded p-2 font-open-sans font-medium text-white hover:animate-pulse hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-600 sm:rounded-md'
          }
        >
          {item.label}
        </p>
      </Link>
    </li>
  );
}
