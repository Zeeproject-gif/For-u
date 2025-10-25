document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const slideshow = document.getElementById('slideshow');
    const message = document.getElementById('message');
    const form = document.getElementById('form');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const changeMsgBtn = document.getElementById('changeMsgBtn');
    const loveForm = document.getElementById('loveForm');
    const response = document.getElementById('response');
    const romanticText = document.getElementById('romanticText');
    const heartsContainer = document.querySelector('.hearts');

    let slideIndex = 0;
    const slides = document.querySelectorAll('.slider img');
    const messages = [
        "Setiap detik bersamamu adalah keajaiban...",
        "Jika aku yang pernah melukai hatimu maka maafkanlah diriku ini..",
        "Kau adalah alasan aku tersenyum setiap hari, walau hanya lewat dari poto ...",
        "I am soryy I love you even though you already have a husband/boyfriend..."
    ];

    // Animasi hati jatuh
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }

    setInterval(createHeart, 300);

    // Mulai PDKT
    startBtn.addEventListener('click', () => {
        document.getElementById('hero').classList.add('hidden');
        slideshow.classList.remove('hidden');
        showSlide(slideIndex);
    });

    // Slideshow
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    prevBtn.addEventListener('click', () => {
        slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
        showSlide(slideIndex);
    });

    nextBtn.addEventListener('click', () => {
        slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
        showSlide(slideIndex);
        if (slideIndex === slides.length - 1) {
            slideshow.classList.add('hidden');
            message.classList.remove('hidden');
        }
    });

    // Ubah pesan romantis
    changeMsgBtn.addEventListener('click', () => {
        romanticText.textContent = messages[Math.floor(Math.random() * messages.length)];
    });

    // Formulir
    loveForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const msg = document.getElementById('messageInput').value;
        response.textContent = `Pesan dari ${name}: "${msg}" - Terima kasih! 💕`;
        form.classList.add('hidden');
    });

    // Musik latar (opsional)
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.3;
});