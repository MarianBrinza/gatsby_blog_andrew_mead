import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import Head from '../components/head/head';

const IndexPage = () => {
  return (
    <Layout>
      <Head title='Home'/>
      <h1>Hello, I'm Marian</h1>
      <h2>I like JS</h2>

      <ul>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default IndexPage;
