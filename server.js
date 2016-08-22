var express = require('express');

//Create our app
var app = express();
const PORT = port.env.PORT || 3000;

app.use(function (req, res, next) {
  if (req.haders['x-forwarded-proto'] == 'http') {
    next();
  } else {
    res.redirect('http:// + req.hostname + req.url')
  }
});

app.use(express.static('public'));


app.listen(PORT, function() {
  console.log("Express server is up on port port" + PORT);
});
