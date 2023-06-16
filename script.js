let btn = document.getElementById('btn');
let header = document.querySelector('header');
let originalBackgroundColor = header.style.background;

btn.addEventListener('click', () => {
    if (header.style.background === 'black') {
        header.style.background = originalBackgroundColor;
    } else {
        header.style.background = 'black';
    }
});

let randomBtn = document.getElementById('randomBtn');

randomBtn.addEventListener('click', () => {
    header.style.background = getRandomColor();
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
