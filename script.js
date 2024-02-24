// const music = document.getElementById('background-music');
// const musicToggle = document.getElementById('music-toggle');

// musicToggle.addEventListener('click', () => {
//     if (music.paused) {
//         music.play();
//         musicToggle.textContent = 'Выключить музыку';
//     } else {
//         music.pause();
//         musicToggle.textContent = 'Включить музыку';
//     }
// });
// const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]; // Обновленный список изображений
// let currentIndex = 0;

// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');
// const imageDisplay = document.getElementById('current-image');

// prevButton.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     imageDisplay.src = images[currentIndex];
// });

// nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % images.length;
//     imageDisplay.src = images[currentIndex];
// });




const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]; // Список изображений
const audioTracks = [
    ["audios/valera1.mp3"], // Для первого изображения одна аудиозапись
    ["audios/2_kadr.mp3"], // Для второго изображения две аудиозаписи
    ["audios/valera3.mp3"], // Для третьего изображения одна аудиозапись
    ["audios/valera4.mp3"], // И так далее
    ["audios/last_kadr.mp3"] // Для пятого изображения четыре аудиозаписи
];

let currentIndex = 0;

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const imageDisplay = document.getElementById('current-image');
const music = document.getElementById('background-music');

function playAudio(index) {
    if (Array.isArray(audioTracks[currentIndex]) && index < audioTracks[currentIndex].length) {
        music.src = audioTracks[currentIndex][index];
        music.load();
        music.play().catch(e => {
            console.error("Ошибка при воспроизведении аудио: ", e);
        });

        music.onended = function() {
            playAudio(index + 1);
        };

}};

function updateGallery() {
    imageDisplay.src = images[currentIndex];
    // Удалено воспроизведение аудио
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
});

const musicToggle = document.getElementById('music-toggle');

// Добавляем обработчик события 'click' на кнопку music-toggle
musicToggle.addEventListener('click', () => {

    playAudio(0); // Включаем музыку с первой аудиозаписи
    // if (music.paused) {
    //     playAudio(0); // Включаем музыку с первой аудиозаписи
    //     musicToggle.textContent = 'Выключить музыку';
    // } else {
    //     music.pause(); // Выключаем музыку
    //     musicToggle.textContent = 'Включить музыку';
    // }
});