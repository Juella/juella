document.querySelector('.leftArrow').onclick = scrollLeft;
document.querySelector('.rightArrow').onclick = scrollRight;
document.querySelector('.Burger').onclick=toggleMenu;
var slider = document.querySelector('.sliderPics');
var left = 0;
function scrollLeft() {
    left -= 225;
    if(left < -800){
        left = 0;
    }
    slider.style.left = left + 'px';
}

function scrollRight() {
    left += 225;
    if(left > 225){
        left = 0;
    }
    slider.style.left = left + 'px';
}
function toggleMenu() {
    var menu=document.querySelector("#burgerItems");
	menu.classList.toggle("active");
}