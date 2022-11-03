import type { Story } from '@ladle/react';
import { Button, ButtonProps } from './button';

export const button: Story<ButtonProps> = ({ disabled, children, variant, size }: ButtonProps) => (
  <Button variant={variant} bg={variant} size={size} disabled={disabled}>{children}</Button>
);

button.args = {
  children: 'Button Text',
  disabled: false,
  variant: 'primary',
  size: 'md',
  shape: 'square',
};
button.argTypes = {
  variant: {
    options: ['primary', 'secondary', 'red', 'green', 'blue', 'yellow', ['orange', 'lightgreen', 'skyblue', 'tomato']],
    control: { type: 'select' },
    defaultValue: 'primary',
  },
  size: {
    options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', ''],
    control: { type: 'select' },
    defaultValue: 'md',
  },
  shape: {
    options: ['pill', 'square', ''],
    control: { type: 'select' },
    defaultValue: 'square',
  }
};

button.storyName = 'Button';
