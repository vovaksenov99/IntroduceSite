let router = express.Router();
let content = require('../public/content');
let utils = require('./utils');
let events = require('../public/events');
let achievements = require('../public/achievements');

router.get('/', function (req, res, next) {
    let lang = utils.getLanguage(req);

    let hostname = req.protocol + '://' + req.headers.host;

    res.render('PDFVersion/index', {
        res: content[lang],
        events: events[lang].events,
        hostname: hostname,
        achievements: achievements[lang].achievements

    });
});
module.exports = router;