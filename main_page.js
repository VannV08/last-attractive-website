const images = [
    'url("Angkor Wat .jpg")',
    'url("prey korng kang.jpg")',
    'url("beachsihanoukville.jpg")',
    'url("Sunset-at-Angkor-Wat-Siem-Reap-Cambodia.jpg")',
    'url("beachsihanoukville.jpg")'
];

let currentIndex = 0;
const content = document.querySelector('.content');

function changeBackground() {
    content.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
    setTimeout(changeBackground, 5000);
}

changeBackground();
