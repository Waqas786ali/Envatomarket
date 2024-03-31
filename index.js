const toggle1 = document.getElementById('color1');
const toggle2 = document.getElementById('color2');
const toggle3 = document.getElementById('color3');
const toggle4 = document.getElementById('color4');
const body = document.querySelector('body');
let htmlElement = document.documentElement;

toggle1.addEventListener('click', function () {
    this.classList.toggle('color1');
    if (this.classList.toggle('color_1')) {
        htmlElement.setAttribute('data-theme', 'green');
    }
})
toggle2.addEventListener('click', function () {
    this.classList.toggle('color2');
    if (this.classList.toggle('color_2')) {
        htmlElement.setAttribute('data-theme', 'yellow');
    }
})
toggle3.addEventListener('click', function () {
    this.classList.toggle('color3');
    if (this.classList.toggle('color_3')) {
        htmlElement.setAttribute('data-theme', 'pink');
    }
})
toggle4.addEventListener('click', function () {
    this.classList.toggle('color4');
    if (this.classList.toggle('color_4')) {
        htmlElement.setAttribute('data-theme', 'blue');
    }
})

 htmlElement.setAttribute('data-theme', 'green');
