import type { Story } from '@ladle/react';
import { Button } from './button';

export const button: Story<{
  children: string;
  disabled: boolean;
  variant: string;
  size: string;
}> = ({ disabled, children, variant, size }) => (
  <Button variant={variant} size={size} disabled={disabled}>{children}</Button>
);

button.args = {
  children: 'Button',
  disabled: false,
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

/*const Card: Story<{
  label: string;
}> = ({ label }) => <p>Label: {label}</p>;

export const CardHello = Card.bind({});
CardHello.args = {
  label: 'Hello',
};

export const CardWorld = Card.bind({});
CardWorld.args = {
  label: 'World',
};*/

button.storyName = 'Button';
