var SMOOTH_SCROLL_DURATION = 800;
$('.smooth-scroll').on('click', 'a', function () {
  var elAttr = $(this).attr('href');

  if (typeof elAttr !== typeof undefined && elAttr.indexOf('#') === 0) {
    var offset = $(this).attr('data-offset') ? $(this).attr('data-offset') : 0;
    var setHash = $(this).parentsUntil('.smooth-scroll').last().parent().attr('data-allow-hashes');
    $('body,html').animate({
      scrollTop: $(elAttr).offset().top - offset
    }, SMOOTH_SCROLL_DURATION);

    if (typeof setHash !== typeof undefined && setHash !== false) {
      history.replaceState(null, null, elAttr);
    }

    return false;
  }
});


var menulauncher = document.querySelector("#sidebarmenu");
var sidewrapper = document.querySelector(".sidebar-wrapper");

function sidebar(){
  menulauncher.addEventListener('click', function() {
    $('.sidebar').addClass("activeted");
    $('.sidebar-wrapper').addClass("activeted-wrapper");
  });
  
  sidewrapper.addEventListener('click', function(){
    $('.sidebar').removeClass("activeted");
    $('.sidebar-wrapper').removeClass("activeted-wrapper");
    $('.sidebar').addClass("unactive");
    $('.sidebar-wrapper').addClass("unactive-wrapper");
  });
}

sidebar()

/* About page */
var aboutlauncher = document.querySelector("#about");
aboutlauncher.addEventListener('click', function(){
  $('.sidebar').addClass("aboutpage");
  $('.navcontent').addClass("abpage");
  $('.abcontent').addClass("abc-active");
  $('.htitle').text("A Propos");
  $('.homeback').addClass("homebactive");
  $('.menuback').addClass("menubactive");
});

var backlauncher = document.querySelector(".homeback");
backlauncher.addEventListener('click', function(){
  $('.sidebar').removeClass("aboutpage");
  $('.navcontent').removeClass("abpage");
  $('.abcontent').removeClass("abc-active");
  $('.htitle').text("CovidBot");
  $('.homeback').removeClass("homebactive");
  $('.sidebar').removeClass("activeted");
  $('.sidebar-wrapper').removeClass("activeted-wrapper");
  $('.menuback').removeClass("menubactive");
});

var menuback = document.querySelector('.menuback');

menuback.addEventListener('click', function(){
  $('.sidebar').removeClass("aboutpage");
  $('.navcontent').removeClass("abpage");
  $('.abcontent').removeClass("abc-active");
  $('.htitle').text("CovidBot");
  $('.homeback').removeClass("homebactive");
  $('.menuback').removeClass("menubactive");
});

/* darkmode */
$("#darkmode").change(function(){
  if(this.checked === true){
    if($('div').hasClass("bg-white") || $('div').hasClass("bg-light")) {
      $('div').removeClass("bg-white");
      $('div').removeClass("bg-light");
      $('h5').removeClass("text-dark");
      $('div').addClass("darkmode");
      $('input').addClass("darkmode");
      $('.msg-left').addClass("msg-darkmode");
      $('.msg-right').addClass("msg-darkmode");
      $('form').addClass("darkmode");
      $('button').addClass("bg-primary-2");
      $('i').removeClass("text-primary-2");
      $('i').addClass("text-white");
      $('.icon-gear, .icon-github, .icon-paypal, .icon-brightness_2, .icon-exclamation-circle, .icon-linkedin, .icon-mail_outline').addClass("text-primary-2");
      $('.features').addClass("msg-darkmode");
      $('.avatar').addClass("bg-white");
      $('path').attr('fill', '#6163cf');
      $('.title').text('Mode sombre');
    }
  }else if (this.checked === false){
      $('h5').addClass("text-dark");
      $('div').removeClass("darkmode");
      $('input').removeClass("darkmode");
      $('.msg-left').removeClass("msg-darkmode");
      $('.msg-right').removeClass("msg-darkmode");
      $('form').removeClass("darkmode");
      $('button').removeClass("bg-primary-2");
      $('.icon-send2').addClass("text-primary-2");
      $('i').removeClass("text-white");
      $('.features').removeClass("msg-darkmode");
      $('path').attr('fill', '#585af5');
      $('.title').text('Mode jour');
      $('.icon-gear, .icon-github, .icon-paypal, .icon-brightness_2, .icon-exclamation-circle, .icon-linkedin, .icon-mail_outline').removeClass("text-primary-2");
  }
})