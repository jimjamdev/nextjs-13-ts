'use client';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { styled } from '~theme/index';
import { backgroundColor, BackgroundColorProps, color, ColorProps, compose } from 'styled-system';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
ColorProps & BackgroundColorProps & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

const ButtonStyle = styled('button')`
  background: tomato;
  ${compose(color, backgroundColor)}};
`;

export function Button({ children }: ButtonProps) {
  return <ButtonStyle color="white" backgroundColor={['red', 'green', 'blue']}>{children}</ButtonStyle>;
}
