var classToggle = function(toggle, className){
    if(toggle === true) {
        return className;
    }
    return '';
};

var express = require('express'),
    exphbs = require('express-handlebars'),
    LOCAL_PORT = 3001,
    app = express(),
    handlebars = exphbs.create({
        defaultLayout: 'default',
        extname: '.html',
        helpers: {
            classToggle: classToggle
        }
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

app.get('/register', function (req, res) {
    res.render('account-creation', {layout: 'accountlayout'});

});

app.get('/login', function (req, res) {
    res.render('account-login', {layout: 'accountlayout'});
});
