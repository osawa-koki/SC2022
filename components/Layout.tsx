import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Setting } from '../common/Setting';

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
      <link rel="icon" type="image/png" href={`${Setting.IMG_ROOT_PATH}/Logo.png`} />
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
    <footer>🥺 SC2022 (情報処理安全確保支援士試験対策) 🥺</footer>
  </div>
);

export default Layout;
