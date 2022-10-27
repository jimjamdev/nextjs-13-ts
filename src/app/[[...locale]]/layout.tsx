import { ReactNode } from 'react';

export default function Layout({ params, children }: {
  children: ReactNode;
  params: { locale?: string };
}) {
  return <main className="layout">
    <header><h3 style={{ color: 'tomato' }}>{params.locale || 'en'}</h3></header>
    {children}
  </main>;
}
