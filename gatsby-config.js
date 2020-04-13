/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 *******************************************
 *   REMEMBER THIS IS A NODE.JS FILE !!
 *******************************************
 */

module.exports = {
  siteMetadata: {
    title: 'Learning Gatsby with Andrew Mead',
    author: 'Marian Burtoaca',
  },
  plugins: [
    // plugin name
    'gatsby-plugin-sass',
    {
      // this plugin loads the files from file system
      // resolve property is the name of the plugin
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        // path to where our content is (posts folder in our case)
        path: `${__dirname}/src/posts/`,
      },
      // this plugin looks for md files and parses them
    },
    'gatsby-transformer-remark',
  ],
};
