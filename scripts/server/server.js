import express from 'express';
import exphbs from 'express-handlebars';
import * as routes from './routes';

var classToggle = (toggle, className) => {
    if(toggle === true) {
        return className;
    }
    return '';
};

const LOCAL_PORT = 3001,
    app = express(),
    handlebars = exphbs.create({
        defaultLayout: 'default',
        extname: '.html',
        helpers: {
            classToggle: classToggle
        }
    });

//setup
app.set('view engine', 'html')
    .engine('html', handlebars.engine)
    .use(express.static('./public'))
    .set('port', (process.env.PORT || LOCAL_PORT))
    .listen(app.get('port'), function() {
        console.log('Node app is running on port', app.get('port'));
    });

//routes
app.get('/', routes.home)
    .get('/register', routes.accountRegistration)
    .get('/login', routes.accountLogin);
