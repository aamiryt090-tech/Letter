const startBtn = document.getElementById('start-btn');
const overlay = document.getElementById('start-overlay');
const music = document.getElementById('bg-music');

startBtn.addEventListener('click', function() {
    console.log("Button Clicked!"); // Ye check karne ke liye hai
    
    // Music play karne ki koshish
    music.play().catch(error => {
        console.log("Music play error:", error);
    });

    // Screen ko hatane ke liye
    overlay.classList.add('fade-out');
    
    // Hearts shuru karne ke liye
    setInterval(createHeart, 300);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const icons = ['❤️', '💖', '✨', '🌸', '💘'];
    heart.innerText = icons[Math.floor(Math.random() * icons.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 6000);
}
