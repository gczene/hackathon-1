var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  request = require('superagent');

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/:id', function (req, res, next) {
  let url = `https://www.britishgas.co.uk/${req.params.id}`;

  request.get(url)
    .end((err) => {
      if (err) {
        next(err);
      } else {
        res.render('index', {
          title: 'my title',
          text: 'my text'
        });
      }
    });

});

app.use((err, req, res, next) => {
  res.send('error happened');
});

app.listen(port, function () {
  console.log('server started on ' + port);
});
