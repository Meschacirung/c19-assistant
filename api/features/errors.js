var responses = require('../bot/chat');

function errors (){
    var welcomsg = responses.errors[Math.floor(Math.random() * responses.errors.length)];
    
    return welcomsg;
}

module.exports = errors()