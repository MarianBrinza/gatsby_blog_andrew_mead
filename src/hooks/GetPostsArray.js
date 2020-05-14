import { graphql, useStaticQuery } from 'gatsby';

const GetPostsArray = () => {
  const data = useStaticQuery(
    graphql`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            date
                        },
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `
  );

  return data.allMarkdownRemark.edges;
};

export default GetPostsArray;
