var chatsection = document.querySelector("#messages");
var msgleft = document.querySelector("#audio");
var socket = io();

$(function () {
    $('form').submit(function(msg){
        if ($('#message').val().trim() != '') {
            if ($('#message').val().length > 2){
                socket.emit('user message', $('#message').val());
                $('#message').val('');
            }
        }
        return false;
    });
    socket.on('bot message', function(msg){
        setTimeout(function(){
            function textToSpeech() {
                var available_voices = window.speechSynthesis.getVoices();
                var french_voice = '';
                for(var i=0; i<available_voices.length; i++) {
                    if(available_voices[i].lang === 'fr-FR') {
                        french_voice = available_voices[i];
                        break;
                    }
                }
                if(french_voice === '')
                    french_voice = available_voices[0];
            
    
                var utter = new SpeechSynthesisUtterance();
                utter.rate = 1.3;
                utter.pitch = 1.1;
                utter.text = msg;
                utter.voice = french_voice;
    
                utter.onend = function() {
                    console.log('speech onend');
                };
    
                window.speechSynthesis.speak(utter);
            }
            textToSpeech();
            
            $('#messages').append($(`
            <div class="msg mt-2">
                <div>
                    <img src="images/chatbot-avatar.png" alt="" class="img-fluid">
                </div>
                <span class="msg-left mt-2">
                    ${msg}
                </span>
            </div>`));
            msgleft.play();
        chatsection.scrollTop += 20000;
        }.bind(this), 290);   
    });
    socket.on('bot features', function(msg){
        setTimeout(function(){
            $('#messages').append($(`
            <div class="features bg-white mt-3">
                <a class="pt-2 pb-2 pl-4 pr-4  text-dark bg-primary-3 rounded-3 shadow-none"><i class="icon-twitter text-primary"></i> Tweets</a>
                <a class="pt-2 pb-2 pl-4 pr-4  text-dark bg-primary-3 rounded-3 shadow-none"><i class="icon-question text-default"></i> Questions</a> <br class="mb-4">
            </div>`));
        chatsection.scrollTop += 20000;
        }.bind(this), 291);
        
    });
    socket.on('user message', function(msg){
        $('#messages').append($(`
        <div class="msg mt-2">
            <div class="text-right">
                <div class="text-right">
                    <div class="mb-2">
                        <img width="35" src="images/user-avatar.jpeg" id="avatar-img" class="img-fluid  rounded-circle" alt="">
                    </div>
                    <span class="msg-right border" id="usermsg">
                    ${msg}
                    </span>
                </div>
            </div>
        </div>`));
        chatsection.scrollTop += 200000;
    });
});