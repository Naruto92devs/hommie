const toggleButton = document.getElementsByClassName('menu-btn')[0];
const linkmenu = document.getElementsByClassName('center-menu');
toggleButton.addEventListener('click', function() {
    for(var i=0; i<linkmenu.length; i++)
    linkmenu[i].classList.toggle('active');
});