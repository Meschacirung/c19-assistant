const responses = require('../bot/chat');

function questions (){
    var welcomsg = responses.features.questions[Math.floor(Math.random() * responses.features.questions.length)]
    
    return welcomsg;
}

module.exports = questions();