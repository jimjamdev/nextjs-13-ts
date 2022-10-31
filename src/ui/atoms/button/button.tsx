'use client';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { styled } from '~theme/index';
import { color, ColorProps, compose } from 'styled-system';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
ColorProps & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

const ButtonStyle = styled('button')`
  background: tomato;
  ${compose(color)}};
`;

export function Button({ children }: ButtonProps) {
  return <ButtonStyle color="white" backgroundColor={['red', 'green', 'blue']}>{children}</ButtonStyle>;
}
