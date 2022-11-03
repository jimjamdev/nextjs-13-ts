'use client';
import { ReactNode } from 'react';
import { styled, BackgroundColorProps, color, ColorProps, compose } from '~theme/index';

export type ButtonProps =
ColorProps & BackgroundColorProps & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  disabled?: boolean;
};

const ButtonStyle = styled('button')(compose(color));

export function Button({ children, variant = 'primary', bg = ['orange', 'lightgreen', 'skyblue', 'tomato'], size }: ButtonProps) {
  return <ButtonStyle size={size} color={variant} bg={bg}>{children}</ButtonStyle>;
}
