const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const routes = require('./routes/index');

const bot = require('./api/bot');
bot.chat(io);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.disable('etag')

if(app.get('env')=== 'development'){
    app.use(function(err, req, res, next){
        res.status(err.status || 500);
        res.render('500', 'error', {
            message:err.message,
            error:err
        });
    });
};

http.listen(3000, ()=>{
    console.log('Example listening on port 3000!');
})