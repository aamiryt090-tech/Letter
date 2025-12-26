const startBtn = document.getElementById('start-btn');
const overlay = document.getElementById('start-overlay');
const music = document.getElementById('bg-music');

// Start button click hone par music aur animation shuru hoga
startBtn.addEventListener('click', () => {
    music.play();
    overlay.classList.add('fade-out');
    setInterval(createHeart, 300); // Hearts tabhi shuru honge jab button click hoga
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    const icons = ['❤️', '💖', '✨', '🌸', '💘', '💍'];
    heart.innerText = icons[Math.floor(Math.random() * icons.length)];
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.getElementById('heart-container').appendChild(heart);

    setTimeout(() => { heart.remove(); }, 6000);
}
