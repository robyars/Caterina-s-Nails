// slideshow.js

document.addEventListener('DOMContentLoaded', () => {
  const slideshowContainer = document.querySelector('.slideshow-container');
  const bg1 = document.querySelector('.bg1');
  const bg2 = document.querySelector('.bg2');

  let currentImageIndex = 0;
  let currentBackground = 1;

  function changeImage() {
    const nextBackground = currentBackground === 1 ? 2 : 1;
    const currentElement = currentBackground === 1 ? bg1 : bg2;
    const nextElement = currentBackground === 1 ? bg2 : bg1;

    const imgElement = document.createElement('img');
    imgElement.src = 'slideshow/' + imageFilenames[currentImageIndex];
    nextElement.innerHTML = '';
    nextElement.appendChild(imgElement);

    nextElement.classList.add('fade');
    currentElement.style.opacity = 0;
    nextElement.style.opacity = 1;

    setTimeout(() => {
      nextElement.classList.remove('fade');
    }, 1000);

    currentImageIndex = (currentImageIndex + 1) % imageFilenames.length;
    currentBackground = nextBackground;
  }

  changeImage();
  setInterval(changeImage, 3000);
});
