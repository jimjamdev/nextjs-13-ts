import { ReactNode } from 'react';

export default function Layout({ children }: {
  children: ReactNode;
}) {
  return <section className="faqs">
    {children}
  </section>;
}
