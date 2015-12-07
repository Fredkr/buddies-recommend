var express = require('express'),
    exphbs = require('express-handlebars'),
    LOCAL_PORT = 3001,
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
  .set('port', (process.env.PORT || LOCAL_PORT))
  .listen(app.get('port'), function() {
      console.log('Node app is running on port', app.get('port'));
  });

//routes
app.get('/', function (req, res) {
    res.render('home');
});
