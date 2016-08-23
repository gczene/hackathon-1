var request = require('superagent');

module.exports = function (req, res) {
  request.get('https://www.britishgas.co.uk/api/content/desktop-header/')
    .end(function (err, resp) {
      if (err) {
        res.send({});
      } else {
        res.send(resp.body);
      }
    });
};
