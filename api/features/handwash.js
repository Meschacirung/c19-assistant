const responses = require('../bot/chat')

function handwash (){
    var welcomsg = ""
    welcomsg = responses.features.handwash[Math.floor(Math.random() * responses.features.handwash.length)]
    
    return welcomsg
}

module.exports = handwash()