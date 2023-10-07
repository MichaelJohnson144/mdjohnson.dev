import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

export default function SubHeading() {
  return (
    <h2
      className={
        'mx-2 border-t-4 border-t-pink-400 bg-black/[35%] py-2 text-2xl text-white sm:mx-0 lg:text-4xl'
      }
    >
      SO, WHAT'S MY TECH
      <Link href={'/about/tech-stack'} rel={'next'} title={'View my tech stack'}>
        <FontAwesomeIcon bounce={true} className={'text-2xl lg:text-3xl'} icon={faLayerGroup} />
      </Link>
      ?
    </h2>
  );
}
