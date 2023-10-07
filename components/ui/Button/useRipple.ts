import { useState, useRef, useCallback, useEffect, MouseEvent } from 'react';
import { ButtonProps } from './Button';
import { rippleTypesStyles } from './styles/rippleTypeStyles';

interface RippleStateProps {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
}

export default function useRipple({ variant, color }: ButtonProps) {
  const [rippleEffects, setRippleEffects] = useState<RippleStateProps[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  /* By incrementing the `counter` each time `addRippleEffect` adds a new ripple effect, we
   guarantee a unique key/ID for each ripple, even when multiple execute simultaneously, as it
   operates with a granularity of milliseconds (ms), which is the smallest unit of time `Date.now()`
   can measure: */
  const counter = useRef(0);

  /* Compute and memorize the appropriate color of the ripple effect based upon the current `variant`
   and `color`
   props of the type-safe `rippleTypesStyles`
   object that reflects the individual styles of its parent component's counterparts: */
  const getRippleColor = useCallback(() => {
    const handleRippleColor = rippleTypesStyles.variant;

    return (
      handleRippleColor[variant as keyof typeof handleRippleColor]?.[
        color as keyof typeof variant
      ] ??
      handleRippleColor[variant as keyof typeof handleRippleColor]?.primary ??
      null
    );
  }, [variant, color]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  const addRippleEffect = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const rippleEffectContainer = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rippleEffectContainer.x;
      const y = event.clientY - rippleEffectContainer.y;
      const size = Math.max(rippleEffectContainer.width, rippleEffectContainer.height) * 2;

      counter.current += 1;

      /* By combining the current timestamp (`Date.now()`) and counter (`counter.current`),
       we ensure that each ripple effect will have a unique key/ID: */
      const id = `${Date.now()}-${counter.current}`;

      /* Set the ripple effect's color based upon the current `theme`, `variant`,
       and `color` props of the type-safe `rippleTypesStyle` object,
       which reflects the chosen styles of its parent component's counterparts: */
      const color = getRippleColor();

      setRippleEffects((previousRippleEffects) => [
        ...previousRippleEffects,
        { id, x, y, size, color },
      ]);
    },
    [getRippleColor],
  );

  const removeRippleEffect = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    const removeEffect = () => {
      /* By filtering out old ripple effects from the state, we prevent the `rippleEffects`
       array rom growing indefinitely, negatively impacting performance: */
      setRippleEffects((previousRippleEffects) =>
        previousRippleEffects.filter((_, index) => index !== 0),
      );
      timerRef.current = null;
    };

    timerRef.current = setTimeout(removeEffect, 700);
  }, []);

  return { rippleEffects, addRippleEffect, removeRippleEffect };
}
