const greeting = require('./features/greeting')
const welcome= require ('./features/welcome')
const thanks = require('./features/thanks')
const test = require ('./features/test/index')
const testquestions = require ('./features/test/test')
const tweets = require ('./features/tweets')
const questions = require ('./features/questions')
const handwash = require ('./features/handwash')
const errors = require ('./features/errors')

const chat = io =>{
    io.on('connection', function(socket){
        socket.emit('bot message', welcome)
        socket.emit('bot features')
        socket.on('user message', function(msg){
            io.emit('user message', msg);
            msg = msg.toLowerCase()

            if (msg.includes('hello') || (msg.includes('bonjour')) || (msg.includes('salut')) || (msg.includes('bonsoir'))){
                socket.emit('bot message', greeting)
            } 
            
            else if (msg.includes('merci') || (msg.includes('cool')) || (msg.includes('bon'))){ 
                socket.emit('bot message', thanks)
            }

            else if (msg.includes('sais faire') || (msg.includes('fais quoi')) || (msg.includes('fonctionnalités')) || (msg.includes('peu faire'))){ 
                socket.emit('bot message', 'Voici mes fonctionnalités, elles ne sont que quatre :')
                socket.emit('bot features')
            }
            
            else if (msg.includes('bravo') || (msg.includes('pas mal')) ){ 
                socket.emit('bot message', 'Merci')
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

            else if ((msg.includes('laver les main')) || (msg.includes('laver mes main')) || (msg.includes('lavage')) || (msg.includes('lavé main')) || (msg.includes('chrono')) ){
                socket.emit('bot message', handwash)
                socket.emit('bot handwash')
            } 
            // else if (msg.includes('test') ){
            //     socket.emit('bot message', test)
            //     socket.emit('bot message', 'Répondez par Oui ou Non')
            //     for (var i = 0; i< testquestions.length; i++){
            //         socket.emit('bot message', testquestions[i])
            //         if((io.emit)){
            //             socket.on('user message', function(msg){
            //                 socket.emit('bot message', testquestions[1])
            //             })
            //         }
            //         break
            //     }
            // }
            else{
                socket.emit('bot message', errors)
            }
            
        });
    });
}

module.exports = {chat};