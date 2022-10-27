import { ReactNode } from 'react';

export default function Layout({ locale, children, ...rest }: {
  children: ReactNode;
  locale?: string;
}) {
  console.log('rest', rest);
  return <main className="layout">
    <header><h3 style={{ color: 'tomato' }}>{locale || 'nope'}</h3></header>
    {children}
  </main>;
}
