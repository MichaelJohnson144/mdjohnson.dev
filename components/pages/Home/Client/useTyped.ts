import { MutableRefObject, useEffect } from 'react';
import Typed, { TypedOptions } from 'typed.js';

interface UseTypedProps {
  ref: MutableRefObject<HTMLElement | null>;
  options: TypedOptions;
}

export default function useTyped({ ref, options }: UseTypedProps) {
  useEffect(() => {
    if (ref.current) {
      const typed = new Typed(ref.current, options);
      return () => typed.destroy();
    }
  }, [ref, options]);
}
