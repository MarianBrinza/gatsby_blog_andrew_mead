import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import Head from '../components/head/head';

const PageNotFound = () => {
  return (
    <Layout>
      <Head title='Page not found'/>
      <h1>
        404 Page not found!
      </h1>
      <Link to='/'>Head home</Link>

    </Layout>
  );
};

export default PageNotFound;
