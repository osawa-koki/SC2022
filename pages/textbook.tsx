import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

import Layout from '../components/Layout';
import { pages } from '../data/pages';
import { isProd } from '../common/Setting';

const IndexPage = () => {

  let [Index, setIndex] = useState(0);
  let [Page, setPage] = useState(pages);
  let [Html, setHtml] = useState('');

  useEffect(() => {
    PutHtml();
  }, [Index, Page]);

  function SetPageOnUri(page: number) {
    history.pushState(null, '', `?page=${page}`);
  }

  async function PutHtml() {
    // Pageパラメタからページ番号を取得
    const uri = new URL(window.location.href);
    const page = uri.searchParams.get('page');
    let page_number = 0;
    // ページが有効であれば
    if (page && !isNaN(Number(page)) && Number(page) >= 0 && Number(page) < Page.length) {
      page_number = Number(page);
    } else {
      SetPageOnUri(page_number); // TODO: URLパラメタが更新されない。
    }
    setIndex(page_number);
    let title = Page[page_number].title;
    try {
      await fetch(`/textbook/${title}.html`)
      .then(response => response.text())
      .then(text => {
        if (isProd) {
          setHtml(text);
        } else {
          setHtml(text.replaceAll('/SC2022/textbook.img', '/textbook.img'));
        }
      });
      await fetch(`/textbook.script/${title}.js`)
      .then(response => response.text())
      .then(text => eval(text));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout title={`${Page[Index].title} (情報処理安全確保支援士試験対策)`}>
      <div id='Textbook'>
        <h1>{Page[Index].title}</h1>
        <div dangerouslySetInnerHTML={ { __html: Html } } />
      </div>
      <div>
        {Index > 0 && <Button id='ButtonPrev' variant="success" onClick={() => {setIndex(Index - 1); SetPageOnUri(Index - 1); window.scroll({ top: 0, behavior: 'smooth' });}}>前へ</Button>}
        {Index < Page.length - 1 && <Button id='ButtonNext' variant="primary" onClick={() => {setIndex(Index + 1); SetPageOnUri(Index + 1); window.scroll({ top: 0, behavior: 'smooth' })}}>次へ</Button>}
      </div>
    </Layout>
  );
}

export default IndexPage;
