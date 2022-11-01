'use client';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { styled, BackgroundColorProps, color, ColorProps, compose } from '~theme/index';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
ColorProps & BackgroundColorProps & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

const ButtonStyle = styled('button')(compose(color));

export function Button({ children }: ButtonProps) {
  return <ButtonStyle color="white" bg={['orange', 'lightgreen', 'skyblue', 'tomato']}>{children}</ButtonStyle>;
}
