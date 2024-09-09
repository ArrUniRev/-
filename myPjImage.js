const images = [
    'mee.jpg',
    'myhobby.jpg',
    'mypet1.jpg',
    'mypet2.jpg',
    'myplants.jpg'
];

let currentIndex = 0;

const imageElement = document.getElementById('current-image');
const statusElement = document.getElementById('status');

function updateSlider() {
    imageElement.src = images[currentIndex];
    statusElement.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
}

document.getElementById("next").addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

document.getElementById("prev").addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

updateSlider(); //в теории так?