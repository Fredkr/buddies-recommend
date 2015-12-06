var express = require('express'),
    exphbs = require('express-handlebars'),
    PORT = 3001,
    HOSTNAME = 'localhost',
    app = express(),
    handlebars = exphbs.create({
        defaultLayout: 'main',
        extname: '.html',
    });

//setup
app
  .set('view engine', 'html')
  .engine('html', handlebars.engine)
  .use(express.static(__dirname + '/public'))
  .listen(PORT, HOSTNAME, function () {
      console.log('Express server is running: go to http://' + HOSTNAME + ':' + PORT);
  });

//routes
app.get('/', function (req, res) {
    res.render('home');
});
