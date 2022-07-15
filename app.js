const body = document.querySelector('body');
const colorButton = document.querySelector('#colorButton');
const rgbText = document.querySelector('#rgbText');
const counterText = document.querySelector('.counter');
let clickCounter = -1;

const randomNumber = function () {
    return Math.floor(Math.random() * (255 - 1 + 1) + 1);
}

function randomColor() {
    let r = randomNumber();
    let g = randomNumber();
    let b = randomNumber();
    clickCounter++

    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    rgbText.innerText = `RGB (${r}, ${g}, ${b})`;
    counterText.innerText = `Clicks: ${clickCounter}`

    if (r + g + b <= 200) {
        rgbText.style.color = 'white';
        colorButton.style.color = 'white';
        colorButton.style.border = '1px solid rgba(255, 255, 255, 1)';
        counterText.style.color = 'white';

    } else {
        rgbText.style.color = 'black';
        colorButton.style.color = 'black';
        colorButton.style.border = '1px solid rgba(0, 0, 0, 1)';
        counterText.style.color = 'black';

    }

}

document.addEventListener("DOMContentLoaded", randomColor)
colorButton.addEventListener('click', randomColor)

