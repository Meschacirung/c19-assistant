var modelauncher = document.querySelector("#switch")
var sidebar = document.querySelector("#sidebar")
var tab = document.querySelector("#tab")

modelauncher.addEventListener('checked', function(){
    sidebar.className += "darkmode";
    tab.className += "darkmode-tab"
})