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

const countDownDate = new Date("Apr 2, 2021 13:55:25").getTime();
const interval = setInterval(function(){
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const seconds = Math.floor((distance % (1000 * 60)) / 1000 ) ;

  document.getElementById("timer").innerHTML = seconds;
  if (seconds < 10){
    document.getElementById("timer").innerHTML = "0" + seconds
  }
}, 1000)

var menulauncher = document.querySelector("#sidebarmenu")
var sidebar = document.querySelector("#sidebar")
var sidewrapper = document.querySelector(".sidebar-wrapper")

menulauncher.addEventListener('click', function() {
  sidewrapper.style.display = "block";
  sidebar.style.marginLeft="0";
});

sidewrapper.addEventListener('click', function(){
  sidewrapper.style.display = "none"
  sidebar.style.marginLeft="-100%"
})