const responses = require('../../bot/chat')

function test (){
    var welcomsg = ""
    welcomsg = responses.features.Test[Math.floor(Math.random() * responses.features.Test.length)]
    return welcomsg
}

module.exports = test()