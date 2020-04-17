import React from 'react';
import Layout from '../components/layout/layout';
import { graphql, Link, useStaticQuery } from 'gatsby';
import blogStyles from './blog.module.scss';
import Head from '../components/head/head';

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

  return (
    <Layout>
      <Head title='Blog'/>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {
          edges.map((item, index) => {
            const title = item.node.frontmatter.title;
            const date = item.node.frontmatter.date;
            const slug = 'blog/' + item.node.fields.slug;

            return (
              <li key={index}
                  className={blogStyles.post}>
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
