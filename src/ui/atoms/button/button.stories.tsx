import type { Story } from '@ladle/react';
import { Button, ButtonProps } from './button';

export const button: Story<ButtonProps> = ({ disabled, children, variant, size }: ButtonProps) => (
  <Button variant={variant} size={size} disabled={disabled}>{children}</Button>
);

button.args = {
  children: 'Button',
  disabled: false,
  variant: 'primary',
  size: 'md',
};
button.argTypes = {
  variant: {
    options: ['primary', 'secondary', ''],
    control: { type: 'select' },
    defaultValue: 'primary',
  },
  size: {
    options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', ''],
    control: { type: 'select' },
    defaultValue: 'md',
  },
};

button.storyName = 'Button';
