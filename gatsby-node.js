const path = require('path');

// this will get called automatically by gatsby when a new node is created (onCreateNode)
// get the slug and add it to the node
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // get the node with the type of MarkdownRemark
  if (node.internal.type === 'MarkdownRemark') {

    // get the slug
    const slug = path.basename(node.fileAbsolutePath, '.md');

    // attach the slug to the node
    createNodeField({
      node: node,
      name: 'slug',
      value: slug,
    });
  }
};

// create the pages
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 1. get path to template
  const blogTemplate = path.resolve('./src/templates/blog.js');

  // 2. get markdown data
  const res = await graphql(`
  # Write your query or mutation here
  query{
    allMarkdownRemark{
      edges{
        node{
          fields{
            slug
          }
        }
      }
    }
  }
`);

  // 3. create new pages
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,                // patch to component we try to render
      path: `/blog/${edge.node.fields.slug}`, // url path -> localhost/blog/gatsby
      context: {                // is an object, it contains stuff that we can pass down to that template
        slug: edge.node.fields.slug,
      },
    });
  });

};
