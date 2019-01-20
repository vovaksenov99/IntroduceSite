let router = express.Router();

router.get('/', function (req, res, next) {
  let hostname = req.protocol + '://' + req.headers.host;
  res.render('WisdomPage/layout', {
    hostname: hostname,
  });
});

module.exports = router;