var open = document.getElementById('open-search');
var close = document.getElementById('close-search');
var searchform = document.getElementById('main__searchform');

open.addEventListener('click',function() {
    searchform.style.display = "block";
})

close.addEventListener('click',function() {
    searchform.style.display = "none";
})