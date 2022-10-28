import { ReactNode } from 'react';
import Link from 'next/link';

export default function Layout({
  locale,
  children,
  ...rest
}: {
  children: ReactNode;
  locale?: string;
}) {
  console.log('rest', rest);
  return (
    <html>
      <head>
        <title>Green Jade</title>
      </head>
      <body>
        <main className="layout">
          <header>
            <h1>Global Layout</h1>
            <h3 style={{ color: 'tomato' }}>{locale || 'nope'}</h3>
          </header>
          <nav>
            <Link href="/sub" locale="en">Test Sub Page</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
