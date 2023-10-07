import Link from 'next/link';
import Image from 'next/image';

import { frontEndTechStack } from '../utils/frontEndTechStack';

export default function FrontEnd() {
  return (
    <>
      {frontEndTechStack.map((technology) => (
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
