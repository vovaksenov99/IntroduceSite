let frontendController = (function (self) {

  self.setLang = function (lang) {
    localStorage.setItem('lang', lang.toString());
    self.href(location.protocol + '//' + location.host + location.pathname);
  };

  self.href = function (href) {
    if (localStorage.getItem('lang') != null)
      window.location = href + '?lang=' + localStorage.getItem('lang');
    else
      window.location = href + '?lang=' + 'En';
  };

  return self;
})({});
module.exports = frontendController;
