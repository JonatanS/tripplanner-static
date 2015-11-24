var express = require('express'),
    swig = require('swig'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    routes = require('./routes');
    path = require('path');

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/bootstrap',express.static('./node_modules/bootstrap/dist'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/', express.static(path.join(__dirname, '/public')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });


app.use('/', require('./routes/index'));


app.listen(3000, function(err){
  console.log('Listening to port 3000');
});


app.use(function (req, res, next) {
  var err = new Error('not found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log({error: err});
    res.render('404');
});