import { action } from '@ladle/react';
import type { Story } from '@ladle/react';
import { Button } from './button';

export const button: Story<{
  label: string;
  disabled: boolean;
  count: number;
  colors: string[];
  variant: string;
  size: string;
}> = ({ count, disabled, label, colors, variant, size }) => (
  <Button variant={variant} size={size}>{label}</Button>
);

button.args = {
  label: 'Hello world',
  disabled: false,
  count: 2,
  colors: ['Red', 'Blue'],
};
button.argTypes = {
  variant: {
    options: ['primary', 'secondary'],
    control: { type: 'radio' },
    defaultValue: 'primary',
  },
  size: {
    options: ['small', 'medium', 'big', 'huuuuge'],
    control: { type: 'select' },
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
