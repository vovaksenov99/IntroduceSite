let build = function () {
    var Twig = require('twig'); // Twig module
    const path = require('path');
    let config = require('../config');

    let content = require('../public/content');
    let events = require('../public/events');
    let achievements = require('../public/achievements');

    Twig.renderFile(path.join(path.dirname(require.main.filename), 'views') + '/PDFVersion/index.twig', {
        res: content.Rus,
        events: events.Rus.events,
        achievements: achievements.Rus.achievements
    }, (err, html) => {
        console.log("");

        let pdf = require('html-pdf');

        //let html = fs.readFileSync('./introduceSite/public/test.html', 'utf8');
        let options = {
            format: 'A4',
            "base": "http://aksenov-vladimir.herokuapp.com", // Base path that's used to load files (images, css, js) when they aren't referenced using a host
            "border": {
                "top": "2in",            // default is 0, units: mm, cm, in, px
                "right": "1in",
                "bottom": "2in",
                "left": "1.5in"
            },
        };

        pdf.create(html, options).toFile(path.join(config.projectDir,'public/businesscard.pdf'), function (err, res) {
            if (err) return console.log(err);
            console.log(res); // { filename: '/app/businesscard.pdf' }
        });

    });
};

module.exports.build = build;