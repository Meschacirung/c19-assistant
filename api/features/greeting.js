const responses = require('../bot/chat');

function greeting () {
    var greeting = "";
    var Date = 16;
    if (Date > 15 ){
        greeting = responses.greetings[1] || responses.greetings[2];
    }else {
        greeting = responses.greetings[0] || responses.greetings[1];
    }

    var basicquestion = responses.basicquestions[Math.floor(Math.random() * responses.basicquestions.length)]
    basicquestion.toLowerCase

    return greeting + ', ' + basicquestion;

}

module.exports = greeting();