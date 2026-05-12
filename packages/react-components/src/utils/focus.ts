import { tailwindVariant } from './tailwind'

export const focusVisibleStyles = tailwindVariant({
  base: 'outline-none',
  variants: {
    isFocusVisible: {
      true: 'ring-2 ring-ring ring-offset-2 ring-offset-surface',
    },
  },
})