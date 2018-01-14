module.exports = function () {
  let getLanguage = function getLanguage (req) {
    let lang = req.query.lang;
    return lang === undefined ? config.defaultLanguage : lang;
  };

  return {
    getLanguage: getLanguage,
  };
}();