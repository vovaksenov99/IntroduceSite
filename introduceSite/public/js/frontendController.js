let frontendController = (function (self) {

  self.setLang = function(lang)
  {
    localStorage.setItem("lang", lang.toString());
    self.href('')
  }

  self.href = function(href)
  {
    window.location = href+'?lang='+localStorage.getItem("lang");


  }

  return self;
})({});
module.exports = frontendController;
