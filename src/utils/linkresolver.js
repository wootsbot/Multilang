  
exports.linkResolver = function linkResolver(doc) {

  if (doc.type === 'post') {
    return `/${doc.lang}/${doc.uid}`;
  }
  if (doc.type === 'blog_home') {
    return `/${doc.lang}`;
  }
    return '/';
  }