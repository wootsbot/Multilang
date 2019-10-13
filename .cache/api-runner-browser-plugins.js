module.exports = [{
      plugin: require('/Users/paulinagavilan/Documents/Prismic/my-examples/new-project/node_modules/gatsby-plugin-material-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/paulinagavilan/Documents/Prismic/my-examples/new-project/node_modules/gatsby-source-prismic-graphql/gatsby-browser.js'),
      options: {"plugins":[],"defaultLang":"en-us","langs":["en-us","es-es"],"repositoryName":"gatsby-test-p","pages":[{"type":"Blog_home","match":"/:lang?/","path":"/home","component":"/Users/paulinagavilan/Documents/Prismic/my-examples/new-project/src/templates/home.js"},{"type":"Post","match":"/:lang?/:uid","path":"/:lang?/:uid","component":"/Users/paulinagavilan/Documents/Prismic/my-examples/new-project/src/templates/post.js"}]},
    },{
      plugin: require('/Users/paulinagavilan/Documents/Prismic/my-examples/new-project/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
