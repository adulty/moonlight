let stars = document.getElementId('stars');
let moon = document.getElementId('moon');
let mountains_behind = document.getElementId('mountains_behind');
let text = document.getElementId('text');
let btn = document.getElementId('btn');
let mountains_front = document.getElementId('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.srollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})