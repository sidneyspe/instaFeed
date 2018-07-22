var express  = require('express');
var app      = express();
var path 	   = require('path');
var port     = process.env.PORT || 8081;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var methodOverride = require('method-override');

var configDB = require('./config/database.js');

mongoose.connect(configDB.url);
require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

app.set('view engine', 'ejs');

app.use(session({ secret: 'IsolemnlyswearIamuptonogood' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// routes ======================================================================
var index = require('./routes/index');
var api = require('./routes/api');
app.use('/', index);
app.use('/', api);

app.listen(port);
console.log('The magic happens on port ' + port);
