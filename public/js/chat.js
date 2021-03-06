var chatsection = document.querySelector("#messages")
var msgleft = document.querySelector("#audio")
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
        msgleft.play()
        
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
                utter.rate = 1.2;
                utter.pitch = 1;
                utter.text = msg;
                utter.voice = french_voice;
    
                utter.onend = function() {
                    console.log('speech onend')
                }
    
                window.speechSynthesis.speak(utter);
            }
            textToSpeech()
            $('#messages').append($(`
            <span class="msg mt-2">
                <div>
                    <img src="images/mocgen.png" width="30" alt="" class="img-fluid">
                </div>
                <span class="msg-left mt-2">
                    ${msg}
                </span>
            </span>`));
        chatsection.scrollTop += 20000;
        }.bind(this), 290);   
    });
    socket.on('bot features', function(msg){
        setTimeout(function(){
            $('#messages').append($(`
            <div class="bg-white msg-1 mt-3 p-2 pb-4 pt-4 ml-1 mr-1 shadow-sm-2 rounded-2">
                <a href="" class="pt-2 pb-2 pl-4 pr-4  text-dark bg-primary-3 rounded-3 shadow-none"><i class="icon-twitter text-primary"></i> Tweets</a>
                <a href="" class="pt-2 pb-2 pl-4 pr-4  text-dark bg-primary-3 rounded-3 shadow-none"><i class="icon-question text-default"></i> Questions</a> <br class="mb-4">
                <a href="" class="pt-2 pb-2 pl-4 pr-4  text-dark bg-primary-3 rounded-3 shadow-none"><i class=" icon-thermometer text-danger"></i> Test</a>
                <a href="" class="pt-2 pb-2 pl-4 pr-4  text-dark bg-primary-3 rounded-3 shadow-none"><i class="icon-signing text-success"></i> Me laver les mains</a>
            </div>`));
        chatsection.scrollTop += 20000;
        }.bind(this), 291);
        
    });
    socket.on('user message', function(msg){
        $('#messages').append($(`
        <span class="msg mt-2">
            <span class="text-right">
                <div class="text-right">
                    <div style="margin-bottom:-7px">
                        <h2 class="text-primary-2">
                            <i class="icon-face"></i>
                        </h2>
                    </div>
                    <span class="msg-right border" id="usermsg">
                    ${msg}
                    </span>
                </div>
            </span>
        </span>`));
        chatsection.scrollTop += 200000;
    });
    socket.on('bot handwash', function(msg){
        setTimeout(function(){
            $('#messages').append($(`
            <div class="container text-center" style="position: relative; margin:20% 0%;">
                <div class="setters">
                    <div class="minutes-set">
                        <button data-setter="minutes-plus">+</button>
                        <button data-setter="minutes-minus">-</button>
                    </div>
                    <div class="secondes-set">
                        <button data-setter="secondes-plus">+</button>
                        <button data-setter="secondes-minus">-</button>
                    </div>
                </div>
                
                <div class="circle shadow-admin rounded-circle">
                    <svg width="300" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(110,110)">
                            <circle r="100" class="e-c-base" />
                            <g transform="rotate(-90)">
                                <circle r="100" class="e-c-progress" />
                                <g id="e-pointer">
                                    <circle cx="100" cy="0" r="8" class="e-c-pointer" />
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                
                <div class="text-center" style="padding:25% 0px;">
                    <div class="text-right">
                        <h1 id="timer" class="display-1 font-weight-bold text-center letter">30</h1>
                    </div>
                    <button class="play" id="pause">
                        
                    </button>
                </div>
            </div>
            `));
        chatsection.scrollTop += 20000;
        }.bind(this), 2000);
    });
});