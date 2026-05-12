import { tailwindVariant } from './tailwind'

export const focusVisibleStyles = tailwindVariant({
  base: 'outline-none',
  variants: {
    /**
     * React Aria distinguishes between mouse focus
     * (don't show a ring — it's noisy) and keyboard focus (always show a ring — accessibility
     * critical). isFocusVisible is true only for the second case. This is the modern accessibility
     * standard and one of the most under-appreciated things React Aria does.
     */
    isFocusVisible: {
      true: 'ring-2 ring-ring ring-offset-2 ring-offset-surface',
    },
  },
})