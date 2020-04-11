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

app.get('*', function(req, res){
    res.render('404', )
})

app.disable('etag');

http.listen(3000, ()=>{
    console.log('Example listening on port 3000!');
});