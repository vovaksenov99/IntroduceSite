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

    self.setNavBarTab = function (page) {
        if (page === "main") {
            document.getElementById("nav-main-page-tab").firstElementChild.style.opacity = 1
            document.getElementById("nav-main-page-tab").lastElementChild.style.opacity = 1
        }
        if (page === "projects") {
            document.getElementById("nav-projects-page-tab").firstElementChild.style.opacity = 1
            document.getElementById("nav-projects-page-tab").lastElementChild.style.opacity = 1
        }
        if (page === "contacts") {
            document.getElementById("nav-contacts-page-tab").firstElementChild.style.opacity = 1
            document.getElementById("nav-contacts-page-tab").lastElementChild.style.opacity = 1
        }
    };
    return self;
})({});

module.exports = frontendController;
