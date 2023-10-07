'use client';

import { ButtonHTMLAttributes, ReactNode, forwardRef, useMemo } from 'react';
import cn from 'classnames';

import variantTypes from './variantTypes';
import useRipple from './useRipple';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text' | null;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'emerald';
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      disabled = false,
      variant = 'text',
      color = 'primary',
      size = 'medium',
      className,
      onClick,
      type,
      value,
      children,
      ...rest
    },
    ref,
  ) => {
    /* Since the `styles` string is created using the `cn` function from the `classnames`
     library, it can be expensive to recompute on every render;
     therefore, the `useMemo` hook is used to memorize the `styles`
     string to only update it when necessary: */
    const styles = useMemo(() => {
      const sizeStyles = {
        small: 'px-[10px] py-[4px] text-sm',
        medium: 'px-[16px] py-[6px]',
        large: 'px-[22px] py-[8px] text-lg',
      };

      return cn(
        'relative flex items-center justify-center overflow-hidden rounded px-4 py-3 font-medium transition-all duration-200 ease-in-out',
        variantTypes({ disabled, variant, color }),
        sizeStyles[size],
        className,
      );
    }, [disabled, variant, color, size, className]);

    const { addRippleEffect, removeRippleEffect, rippleEffects } = useRipple({ variant, color });

    return (
      <button
        className={styles}
        color={color}
        disabled={disabled}
        onMouseDown={(event) => {
          onClick?.(event);
          addRippleEffect(event);
        }}
        onMouseUp={removeRippleEffect}
        onMouseLeave={removeRippleEffect}
        ref={ref}
        type={type}
        value={value}
        {...rest}
      >
        {children}
        {rippleEffects.map((rippleEffect) => (
          <span
            key={rippleEffect.id}
            className={`absolute animate-ripple rounded-full ${rippleEffect.color} opacity-30`}
            style={{
              top: `${rippleEffect.y - rippleEffect.size / 2}px`,
              left: `${rippleEffect.x - rippleEffect.size / 2}px`,
              width: `${rippleEffect.size}px`,
              height: `${rippleEffect.size}px`,
            }}
          />
        ))}
      </button>
    );
  },
);

/* Depending on your context of later use and real-world performance metrics,
 you may have to wrap this component with the `memo` HOC. */
export default Button;

Button.displayName = 'Button';
