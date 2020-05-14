import { graphql, useStaticQuery } from 'gatsby';

const GetSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `
  );

  return data.site.siteMetadata;
};


export default GetSiteMetadata;
