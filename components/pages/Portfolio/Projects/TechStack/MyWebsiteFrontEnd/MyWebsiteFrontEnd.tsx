import Link from 'next/link';
import Image from 'next/image';

import { myWebsiteFrontEndTechStack } from '../utils/myWebsiteFrontEndTechStack';

export default function MyWebsiteFrontEnd() {
  return (
    <>
      {myWebsiteFrontEndTechStack.map((technology) => (
        <div key={technology.name}>
          <Link href={technology.link} rel={'noreferrer'} target={'_blank'}>
            <Image
              alt={technology.name}
              height={24}
              priority={true}
              quality={100}
              src={technology.imageSrc}
              width={24}
            />
          </Link>
        </div>
      ))}
    </>
  );
}
