module.exports = function () {
    let availableLangs = ["En", "Rus"];
    let getLanguage = function getLanguage(req) {
        let lang = req.query.lang;
        return (lang === undefined || !availableLangs.includes(lang)) ? config.defaultLanguage : lang;
    };

    return {
        getLanguage: getLanguage,
    };
}();