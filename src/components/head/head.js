import React from 'react';
import { Helmet } from 'react-helmet';
import GetSiteMetadata from '../../hooks/GetSiteMetadata';
const Head = ({ title }) => {

  const siteMetadata = GetSiteMetadata();

  return <Helmet
    title={`${title} | ${siteMetadata.title}`}
  />;
};

export default Head;
