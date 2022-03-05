const menu = document.querySelector('#menu');
const header = document.querySelector('header');
const scrollTop = document.querySelector(".top");


menu.addEventListener('click', function(){
    header.classList.toggle('togle');


(function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
})();
});