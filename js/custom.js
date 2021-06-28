let nav_trigger = document.getElementById('nav_trigger');
let nav_close = document.getElementById('nav_close');

nav_trigger.addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('nav_links').classList.toggle('nav_show');
})

nav_close.addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('nav_links').classList.toggle('nav_show');
})