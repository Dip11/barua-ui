'use client'

import { Button as AriaButton, composeRenderProps } from 'react-aria-components'
import { getButtonStyles, type ButtonStyles } from './button.styles'

interface ButtonProps extends React.ComponentPropsWithRef<typeof AriaButton> {
  /**
   * Visual treatment.
   * @default 'primary'
   */
  variant?: ButtonStyles['variant']
  /**
   * Height + padding scale.
   * @default 'md'
   */
  size?: ButtonStyles['size']
}

function Button({ variant = 'primary', size = 'md', children, ...restProps }: ButtonProps) {
  return (
    <AriaButton
      {...restProps}
      className={composeRenderProps(restProps.className, (className, renderProps) => {
        return getButtonStyles({ className, variant, size, ...renderProps })
      })}
    >
      {children}
    </AriaButton>
  )
}

export { Button, type ButtonProps }