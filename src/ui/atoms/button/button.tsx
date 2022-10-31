'use client';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { styled } from '~theme/index';


export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

const ButtonStyle = styled('button')`
background: tomato;
`;


export function Button({ children }: ButtonProps) {
  return <ButtonStyle>{children}</ButtonStyle>;
}

