var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  request = require('superagent');

const host = 'https://www.britishgas.co.uk/';

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
    let url = `${host}${path}`;

    request.get(url)
      .end((err, r) => {
        console.log(r);
        if (err) {
          next(err);
        } else {
          res.render('index', {
            title: 'my title dsadsa',
            text: 'my text',
            backlink: host + path
          });
        }
      });

  }

});

app.use((err, req, res, next) => {
  console.error(err.toString());
  res.send('error happened');
});

app.listen(port, function () {
  console.log('server started on ' + port);
});
