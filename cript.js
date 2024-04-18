document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('backgroundMusic');
    audio.play();
  
    const lyricsDiv = document.getElementById('lyrics');
    const container = document.querySelector('.container');
    const words = lyricsDiv.textContent.split(' ');
  
    lyricsDiv.textContent = '';
  
    function displayHeartIcon() {
      for (let i = 0; i < 18; i++) {
        const heartIcon = document.createElement('div');
        heartIcon.classList.add('heart-icon');
  
        const randomTop = Math.random() * 100;
        const randomLeft = Math.random() * 100;
        heartIcon.style.top = randomTop + '%';
        heartIcon.style.left = randomLeft + '%';
  
        container.appendChild(heartIcon);
        setTimeout(() => {
          container.removeChild(heartIcon);
        }, 1000);
      }
      setTimeout(displayHeartIcon, 2000);
    }
  
    setTimeout(displayHeartIcon, 100);
  
    setTimeout(() => {
      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.textContent = word + ' ';
        wordSpan.classList.add('fade-in-word');
        wordSpan.style.animationDelay = index * 0.4 + 's';
        lyricsDiv.appendChild(wordSpan);
      });
    }, 3200);
  });
  