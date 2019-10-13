/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Gatsby Multilanguage site`,
    description: `Multilanguage site with Gatsby & Prismic`,
    author: `paulina.gavilan`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
        options: {
          defaultLang: 'en-us',
          langs: ['en-us', 'es-es'],
          repositoryName: 'gatsby-test-p', // (REQUIRED, replace with your own)
          pages:[
          {
            type: 'Blog_home',
            match: '/:lang?/',
            path: '/home',
            component: require.resolve('./src/templates/home.js'),
          },
          {
            type: 'Post',
            match: '/:lang?/:uid',
            path: '/:lang?/:uid',
            component: require.resolve('./src/templates/post.js'),
          }
        ]
        }
      }
    ]
}