var greeting = require('./features/greeting');
var welcome= require ('./features/welcome');
var thanks = require('./features/thanks');
var tweets = require ('./features/tweets');
var features = require ('./features/features');
var questions = require ('./features/questions');
var errors = require ('./features/errors');

var chat = io =>{
    io.on('connection', function(socket){
        socket.emit('bot message', welcome);
        socket.emit('bot features');
        socket.on('user message', function(msg){
            io.emit('user message', msg);
            msg = msg.toLowerCase();

            if (msg.includes('hello') || (msg.includes('bonjour')) || (msg.includes('salut')) || (msg.includes('bonsoir'))){
                socket.emit('bot message', greeting);
            } 
            
            else if (msg.includes('merci') || (msg.includes('cool')) || (msg.includes('bon'))){ 
                socket.emit('bot message', thanks);
            }

            else if (msg.includes('sais faire') || (msg.includes('fais quoi')) || (msg.includes('fonctionnalité')) || (msg.includes('fonctionnalités')) || (msg.includes('peu faire'))){ 
                socket.emit('bot message', features);
                socket.emit('bot features');
            }
            
            else if (msg.includes('bravo') || (msg.includes('pas mal')) ){ 
                socket.emit('bot message', 'Merci');
            }
            
            else if ((msg.includes('tweet')) || (msg.includes('twit')) || (msg.includes('OMSRDC')) ){
                socket.emit('bot message', tweets);
            }
            
            else if ((msg.includes('corona')) || (msg.includes('covid')) || (msg.includes('question'))){
                socket.emit('bot message', questions)
            }
            
            else if (msg.includes('okay') || (msg.includes("d'accord")) || (msg.includes("d'accord"))){ 
                socket.emit('bot message', "D'accord, n'hésitez pas si vous avez une question à propos du covid-19")
            }
            else{
                socket.emit('bot message', errors)
            }
            
        });
    });
}

module.exports = {chat};