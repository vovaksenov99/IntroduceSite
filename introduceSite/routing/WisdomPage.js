let router = express.Router();
const fs = require('fs');

router.get('/', function (req, res, next) {
    let hostname = req.protocol + '://' + req.headers.host;
    res.render('WisdomPage/index', {
        hostname: hostname,
    });
});

router.get('/admin', function (req, res, next) {
    let hostname = req.protocol + '://' + req.headers.host;
    res.render('WisdomPage/admin', {
        hostname: hostname,
    });
});


router.post('/addNewQuote', function (req, res) {

    let quotes = require('../public/wisdomPageContent');
    quotes.phrases.push(req.body);
    fs.writeFile("./introduceSite/public/wisdomPageContent.json", JSON.stringify(quotes), function (err) {
        if (err) {
            console.log(err)
            return err;
        }
        res.send(200);
        console.log("The file was saved!");
    });
});

module.exports = router;