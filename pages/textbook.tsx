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

  function PutHtml() {
    if (isProd) {
      fetch(`/textbook/${Page[Index].title}.html`)
        .then(response => response.text())
        .then(text => setHtml(text));
    } else {
      fetch(`/textbook/${Page[Index].title}.html`)
        .then(response => response.text())
        .then(text => setHtml(text.replaceAll('/SC2022/textbook.img', '/textbook.img')));
    }
  }

  return (
    <Layout>
      <div id='Textbook'>
        <div dangerouslySetInnerHTML={ { __html: Html } } />
      </div>
      <div>
        {Index > 0 && <Button id='ButtonPrev' variant="success" onClick={() => setIndex(Index - 1)}>前へ</Button>}
        {Index < Page.length - 1 && <Button id='ButtonNext' variant="primary" onClick={() => setIndex(Index + 1)}>次へ</Button>}
      </div>
    </Layout>
  );
}

export default IndexPage;
