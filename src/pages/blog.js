import React from 'react';
import Layout from '../components/layout/layout';
import { Link } from 'gatsby';
import blogStyles from './blog.module.scss';
import Head from '../components/head/head';
import GetPostsArray from '../hooks/GetPostsArray';

const BlogPage = () => {

  const edges = GetPostsArray();
  console.log('edges: ', edges);

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
