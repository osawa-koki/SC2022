import React, { useState, useEffect } from 'react';
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
    </Layout>
  );
}

export default IndexPage;
