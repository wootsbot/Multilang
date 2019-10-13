const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-source-prismic-graphql-components-preview-page-js": hot(preferDefault(require("/Users/paulinagavilan/Documents/Prismic/my-examples/new-project/node_modules/gatsby-source-prismic-graphql/components/PreviewPage.js"))),
  "component---src-templates-home-js": hot(preferDefault(require("/Users/paulinagavilan/Documents/Prismic/my-examples/new-project/src/templates/home.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/paulinagavilan/Documents/Prismic/my-examples/new-project/src/templates/post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/paulinagavilan/Documents/Prismic/my-examples/new-project/.cache/dev-404-page.js")))
}

