'use client';
import { ReactNode } from 'react';
import { styled, BackgroundColorProps, color, ColorProps, compose } from '~theme/index';

export type ButtonProps =
ColorProps & BackgroundColorProps & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  disabled?: boolean;
  shape?: 'pill' | 'square';
};

const ButtonStyle = styled('button')(compose(color));

export function Button({ children, variant = 'primary', size, shape }: ButtonProps) {
  return <ButtonStyle size={size} variant={variant} bg={variant} shape={shape}>{children}</ButtonStyle>;
}
