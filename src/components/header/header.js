import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import headerStyles from './header.module.scss';

const Header = () => {

  const data = useStaticQuery(graphql`
    query{
        site{
          siteMetadata{
            title,
            author
          }
        }
    }`,
  );
  const siteMetadata = data.site.siteMetadata;

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to='/'>{siteMetadata.title}</Link></h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/'>Home</Link>
          </li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/blog'>Blog</Link>
          </li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive}
                    to='/about'>About</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive}
                    to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
