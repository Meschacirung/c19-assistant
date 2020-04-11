var express = require('express');
var app = express();
var path = require('path');
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var routes = require('./routes/index');

var bot = require('./api/bot');
bot.chat(io);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.disable('etag');

app.use(function(req, res, next) {
    next(createError(404));
    res.render('404');
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('500');
});

module.exports = app;
module.exports = io;