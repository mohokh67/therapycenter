module.exports = {
  // generate static pages
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    };
  }
};
