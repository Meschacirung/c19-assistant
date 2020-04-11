const responses = require('../bot/chat');

function thanks (){
    var welcomsg = responses.thanks[Math.floor(Math.random() * responses.thanks.length)];
    
    return welcomsg;
}

module.exports = thanks();