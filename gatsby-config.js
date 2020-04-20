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
    author: 'Marian Burtoaca'
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
        path: `${__dirname}/src/posts/`
      }
      // this plugin looks for md files and parses them
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          },
        ]
      }
    },
    'gatsby-plugin-react-helmet'
  ]
};
