var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  environment = require('./config').environment,
  request = require('superagent'),
  config = require('./config');

const host = config.bgHost,
  pattern = 'content/britishgas/##path##/jcr:content.json';

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/info/', function (req, res) {
  res.render('default', {});
});

app.get('/info/*?', function (req, res, next) {
  let path = req.params[0];

  if (!path) {
    next('no get params');
  } else {
    let url = host + pattern.replace('##path##', path);

    request.get(url)
      .end((err, bgResponse) => {
        if (typeof bgResponse.body.userNeedsSupplementary === 'string') {
          bgResponse.body.userNeedsSupplementary = [bgResponse.body.userNeedsSupplementary];
        }
        if (err) {
          next(err);
        } else {
          // bgResponse.body.userNeedsSupplementary = ['a', 'b'];
          // bgResponse.body.userNeed = 'dsadsa ds dsada dsa';
          res.render('index', {
            title: bgResponse.body.pageTitle || bgResponse.body['jcr:title'],
            userNeed: bgResponse.body.userNeed || '',
            approver: bgResponse.body.approver,
            approveDate: bgResponse.body.approveDate,
            userNeedsSupplementary: bgResponse.body.userNeedsSupplementary,
            backlink: host + 'content/britishgas/' + path + '.html'
          });
        }
      });

  }

});

app.use((err, req, res, next) => {
  console.error(err.toString());
  res.render('error', {});
});

app.listen(port, function () {
  console.log('server started on ' + port + environment);
});
