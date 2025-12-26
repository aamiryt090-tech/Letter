function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Random emoji select karein
    const icons = ['❤️', '💖', '✨', '🌸', '💘'];
    heart.innerText = icons[Math.floor(Math.random() * icons.length)];
    
    // Random position set karein
    heart.style.left = Math.random() * 100 + "vw";
    
    // Random speed/duration
    const duration = Math.random() * 3 + 4 + "s";
    heart.style.animationDuration = duration;
    
    // Random size
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    document.getElementById('heart-container').appendChild(heart);

    // Kuch der baad heart ko delete karein taaki memory full na ho
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Har 300ms mein ek naya heart banayein
setInterval(createHeart, 300);
