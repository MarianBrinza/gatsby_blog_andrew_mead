import React from 'react';
import Layout from '../components/layout/layout';
import { graphql, Link, useStaticQuery } from 'gatsby';

const BlogPage = () => {

  const data = useStaticQuery(graphql`
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
  }`);

  const edges = data.allMarkdownRemark.edges;
  // render a list using ol > li > h2 {title} > p {date}

  return (
    <Layout>

      <h1>Blog</h1>
      <ol>
        {
          edges.map((item, index) => {
            const title = item.node.frontmatter.title;
            const date = item.node.frontmatter.date;
            const slug = 'blog/' + item.node.fields.slug;

            return (
              <li key={index}>
                <Link to={slug}>
                  <h2>{title}</h2>
                  <p>{date}</p>
                </Link>
              </li>
            );
          })
        }
      </ol>
    </Layout>
  );
};

export default BlogPage;
