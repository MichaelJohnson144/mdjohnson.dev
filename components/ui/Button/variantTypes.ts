import { ButtonProps } from './Button';
import { variantTypesStyles } from './styles/variantTypesStyles';

export function handleVariantTypes({ disabled, variant, color }: ButtonProps) {
  const variantTypesThemeStyles = variantTypesStyles.variant;

  if (disabled) {
    switch (variant) {
      case 'contained':
        return variantTypesThemeStyles.contained.disabled;
      case 'outlined':
        return `${variantTypesThemeStyles.outlined.disabled} outline outline-1`;
      case 'text':
        return variantTypesThemeStyles.text.disabled;
      case null:
        return 'font-semibold text-black/[0.15] dark:text-white/30';
    }
  }

  const variantTypesStylesColors =
    variantTypesThemeStyles[
      // Retrieve the value of the style linked with the chosen variant:
      variant as keyof typeof variantTypesThemeStyles
    ]?.[
      /* Retrieve the color affiliated with the value of the style associated with the chosen
       variant: */
      color as keyof (typeof variantTypesThemeStyles)[keyof typeof variantTypesThemeStyles]
    ];

  if (variant === 'outlined') {
    return `${variantTypesStylesColors} outline outline-1`;
  }

  return variant === null
    ? `${variantTypesStylesColors} font-semibold dark:text-white`
    : variantTypesStylesColors;
}

export default function variantTypes({ disabled, variant, color }: ButtonProps) {
  // Pre-define each variant's default color:
  if (variant && !color) {
    switch (variant) {
      case 'contained':
        return handleVariantTypes({ disabled, variant, color: 'primary' });
      case 'outlined':
        return handleVariantTypes({ disabled, variant, color: 'primary' });
      case 'text':
        return handleVariantTypes({ disabled, variant, color: 'primary' });
      default:
        return null;
    }
  }

  return handleVariantTypes({ disabled, variant, color });
}
