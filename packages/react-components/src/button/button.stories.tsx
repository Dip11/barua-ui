
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    args: {
      children: 'Button',
    },
    argTypes: {
      variant: {
        control: 'select',
        options: ['primary', 'secondary', 'destructive', 'outline', 'ghost'],
      },
      size: {
        control: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  }
  
  export default meta
  type Story = StoryObj<typeof Button>
  
  export const Primary: Story = { args: { variant: 'primary' } }
  export const Secondary: Story = { args: { variant: 'secondary' } }
  export const Destructive: Story = { args: { variant: 'destructive' } }
  export const Outline: Story = { args: { variant: 'outline' } }
  export const Ghost: Story = { args: { variant: 'ghost' } }
  
  export const Small: Story = { args: { size: 'sm' } }
  export const Medium: Story = { args: { size: 'md' } }
  export const Large: Story = { args: { size: 'lg' } }
  
  export const Disabled: Story = { args: { isDisabled: true } }
  
  export const AllVariants = () => (
    <div className='flex flex-wrap gap-3'>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
    </div>
  )