import { MetadataRoute } from 'next';
import { menuItemProps } from 'components/Navigation/MenuItem/menuItemProps';

export default function sitemap(): MetadataRoute.Sitemap {
  return menuItemProps.map((item) => ({
    url: `https://localhost:3000${item.href}`,
    lastModified: new Date(),
  }));
}
