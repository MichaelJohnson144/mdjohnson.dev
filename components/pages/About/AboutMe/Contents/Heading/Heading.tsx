import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons';

export default function Heading() {
  return (
    <h1
      className={
        'mx-2 border-b-4 border-b-pink-400 bg-black/30 py-2 text-2xl text-white sm:mx-0 lg:text-4xl'
      }
    >
      I'M A PASSIONATE AESTHETE
      <FontAwesomeIcon className={'text-2xl lg:text-4xl'} icon={faFillDrip} />
    </h1>
  );
}
