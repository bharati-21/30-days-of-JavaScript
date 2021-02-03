const clickBtn = document.getElementById('click-btn');

clickBtn.addEventListener('click', changeColor);

const colorCode = document.querySelector('.hexColor');
colorCode.textContent = 'f1f5f8';

function changeColor(e) {
    e.preventDefault();
    var color = random_hex();
    colorCode.innerText = '';
    colorCode.innerText = color;
    document.body.style.backgroundColor = color;
}

function random_hex() {
    const randomColor = "#" + (Math.floor(Math.random()* 0xFFFFFF ).toString(16));
    return randomColor;
}
