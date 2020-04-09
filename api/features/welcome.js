const responses = require('../bot/chat')

function welcome () {
    var greeting = ""
    var compliment = ""
    var basicquestion = ""
    var Date = 16
    if (Date > 15 ){
        greeting = responses.greetings[1] || responses.greetings[2]
    }else {
        greeting = responses.greetings[0] || responses.greetings[1]
    }
    compliment = responses.compliments[Math.floor(Math.random() * responses.compliments.length)]
    compliment.toLowerCase

    basicquestion = responses.basicquestions[Math.floor(Math.random() * responses.basicquestions.length)]
    basicquestion.toLowerCase

    return greeting + ', ' + compliment + '. ' + basicquestion

}

module.exports = welcome()