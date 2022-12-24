import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode,
  title?: string,
};

const default_title = '情報処理安全確保支援士試験対策';

const Layout = ({ children, title = default_title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">ホーム</Link>
        <Link href="/textbook">教科書</Link>
        {/* <Link href="/kako-am2">過去問午前Ⅱ</Link> */}
      </nav>
    </header>
    <main>
      {children}
    </main>
    <footer>
    </footer>
  </div>
);

export default Layout;
