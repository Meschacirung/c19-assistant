var responses = require('../bot/chat')

function tweets (){
    var welcomsg = responses.features.tweets[Math.floor(Math.random() * responses.features.tweets.length)]
    
    return welcomsg
}

module.exports = tweets()