let frontendController = (function (self) {

  self.setLang = function(lang)
  {
    localStorage.setItem("lang", lang.toString());
    self.href('')
  }

  self.href = function(href)
  {
    if(localStorage.getItem("lang") != null)
      window.location = href+'?lang='+localStorage.getItem("lang");
  }

  return self;
})({});
module.exports = frontendController;
