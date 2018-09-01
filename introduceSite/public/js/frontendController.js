let frontendController = (function (self) {

  self.setLang = function (lang) {
    sessionStorage.setItem('lang', lang.toString());
    self.href(location.protocol + '//' + location.host + location.pathname);
  };

  self.href = function (href) {
    if (sessionStorage.getItem('lang') != null)
      window.location = href + '?lang=' + sessionStorage.getItem('lang');
    else
      window.location = href + '?lang=' + 'Rus';
  };

  return self;
})({});
module.exports = frontendController;
