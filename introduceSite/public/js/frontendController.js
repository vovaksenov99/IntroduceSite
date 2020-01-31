let frontendController = (function (self) {
    self.setLang = function (lang) {
        sessionStorage.setItem('lang', lang.toString());
        self.href(location.protocol + '//' + location.host + location.pathname);
    };

    self.getLang = function () {
        let lang = sessionStorage.getItem('lang')
        if (lang != null)
           return lang;
        else
            return 'Rus';
    };

    self.href = function (href) {
        if (sessionStorage.getItem('lang') != null)
            window.location = href + '?lang=' + sessionStorage.getItem('lang');
        else
            window.location = href + '?lang=' + 'Rus';
    };

    self.setNavBarColor = function (page) {
        console.log(page);
        let bar = document.getElementsByTagName('nav')[0];
        bar.classList.remove("elegant-color-dark");
        bar.classList.remove("blue-gradient");
        bar.classList.remove("elegant-gradient");

        if (page === "main") {
            bar.classList.add("elegant-color-dark");
        }
        if (page === "projects") {
            bar.classList.add("elegant-gradient");
        }
        if (page === "contacts") {
            bar.classList.add("blue-gradient");
        }

    };


    return self;
})({});


module.exports = frontendController;
