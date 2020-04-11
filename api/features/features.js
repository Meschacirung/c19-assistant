const responses = require('../bot/chat')

function features (){
    var welcomsg = responses.features.features[Math.floor(Math.random() * responses.features.features.length)]
    
    return welcomsg;
}

module.exports = features();