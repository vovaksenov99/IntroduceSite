const cont = require('./content.json')


module.exports.getValue = function(name) {
  return cont[name+module.exports.currentLanguage];
};

module.exports.currentLanguage = "En";

