import React from 'react';
import footerStyles from './footer.module.scss';
import GetSiteMetadata from '../../hooks/GetSiteMetadata';

const Footer = () => {
  const siteMetadata = GetSiteMetadata();

  return (
    <div className={footerStyles.footer}>
      <h4>Created by {siteMetadata.author} @ april 2020</h4>
    </div>
  );
};

export default Footer;
