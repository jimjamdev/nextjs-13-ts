import { ReactNode } from 'react';
import Link from 'next/link';
import RootStyleRegistry from '../../theme/lib/styled-components-registry';

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
      <RootStyleRegistry>
        <main className="layout">
          <header>
            <h1>Global Layout</h1>
            <h3 style={{ color: 'tomato' }}>{locale || 'nope'}</h3>
          </header>
          <nav>
            <ul>
              <li><Link href="/" locale="en">Home</Link></li>
              <li><Link href="/sub" locale="en">Test Sub Page</Link></li>
            </ul>
          </nav>
          {children}
        </main>
      </RootStyleRegistry>
      </body>
    </html>
  );
}