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
      $('.features').addClass("msg-darkmode");
    }
  }else{
    $('div').addClass("bg-white");
      $('div').addClass("bg-light");
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
  }
})