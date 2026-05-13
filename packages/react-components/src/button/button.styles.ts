import { focusVisibleStyles } from '../utils/focus'
import { tailwindVariant, type VariantProps } from '../utils/tailwind'

export const getButtonStyles = tailwindVariant({
  extend: focusVisibleStyles,
  base: [
    'inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap',
    'rounded-md transition-colors select-none',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'hover:cursor-pointer',
  ],
  variants: {
    variant: {
      primary:
        'bg-accent text-on-accent hover:bg-accent-hover pressed:bg-accent-active',
      secondary:
        'bg-muted text-default hover:bg-muted-hover pressed:bg-subtle',
        destructive:
        'bg-danger text-on-accent hover:bg-danger-hover pressed:bg-danger-active',
      outline:
        'border border-border-strong bg-surface text-default hover:bg-muted pressed:bg-muted-hover',
      ghost:
        'bg-transparent text-default hover:bg-muted pressed:bg-muted-hover',
    },
    size: {
      sm: 'h-8 px-3 text-sm rounded-sm',
      md: 'h-10 px-4 text-base rounded-md',
      lg: 'h-12 px-6 text-md rounded-md',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonStyles = VariantProps<typeof getButtonStyles>