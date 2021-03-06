// SET UP
var _dirname = "/home/yin2/dbmi-annotator/";
var config = require('./config/config');

// Load packages
fs = require('fs');
var express = require('express');
var passport = require('passport');
var flash = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var expressValidator = require('express-validator');

var app = express();

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.use(expressValidator());

app.use(express.static('public'));

app.set('view engine', 'ejs'); 

// bring sequelize in
var Sequelize = require('sequelize');
var conStr = require('./config/config');
var sequelize = new Sequelize(config.postgres, {dialect:'postgres', define:{freezeTableName:true, timestamps: false} });
// model initialize
var user = require('./models/user')(sequelize, Sequelize);

user.sync();

// required for passport
app.use(session({ secret: 'dbmi2016'}));

//app.use(session({ secret: 'dbmi2016', cookie: {expires: new Date(Date.now() + 3600000)}})); // session secret
// maxAge: new Date(Date.now() + 3600000) cause session expire one hr after server start 
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); 

require('./config/passport')(passport, user); 
require('./controllers/routes')(app, passport);
require('./controllers/pdf-image-extract')(app);

app.listen(config.annotator.port);










