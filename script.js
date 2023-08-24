/*1ST PAGE SLIDER */
  const prevButton = document.querySelector('.arrow-prev');
  const nextButton = document.querySelector('.arrow-next');
  const imagesContainer = document.querySelector('.images-container');
  const imageWidth = 200; // Width of each image (2in = 200px)

  let currentPosition = 0;

  prevButton.addEventListener('click', slidePrev);
  nextButton.addEventListener('click', slideNext);

  function slidePrev() {
    currentPosition += imageWidth;
    imagesContainer.style.transform = `translateX(${currentPosition}px)`;
    imagesContainer.style.transition = 'transform 0.5s';
  
    if (currentPosition > 0) {
      currentPosition = -imageWidth * (imagesContainer.childElementCount - 1);
      imagesContainer.style.transform = `translateX(${currentPosition}px)`;
      imagesContainer.style.transition = '';
    }
  }
  
  function slideNext() {
    currentPosition -= imageWidth;
    imagesContainer.style.transform = `translateX(${currentPosition}px)`;
    imagesContainer.style.transition = 'transform 0.5s';
  
    if (currentPosition < -imageWidth * (imagesContainer.childElementCount - 1)) {
      currentPosition = 0;
      imagesContainer.style.transform = `translateX(${currentPosition}px)`;
      imagesContainer.style.transition = '';
    }
  }

/*2ND PAGE SLIDER */
  const prevButton2 = document.querySelector('.arrow-prev2');
  const nextButton2 = document.querySelector('.arrow-next2');
  const songCoverContainer = document.querySelector('.songcover-container');
  const songCoverWidth = 200; // Width of each song cover image (200px)

  let currentSongPosition = 0;

  prevButton2.addEventListener('click', slidePrev2);
  nextButton2.addEventListener('click', slideNext2);

  function slidePrev2() {
    currentSongPosition += songCoverWidth;
    songCoverContainer.style.transform = `translateX(${currentSongPosition}px)`;
    songCoverContainer.style.transition = 'transform 0.5s';

    if (currentSongPosition > 0) {
        currentSongPosition = -songCoverWidth * (songCoverContainer.childElementCount - 1);
        songCoverContainer.style.transform = `translateX(${currentSongPosition}px)`;
        songCoverContainer.style.transition = '';
    }
  }

  function slideNext2() {
    currentSongPosition -= songCoverWidth;
    songCoverContainer.style.transform = `translateX(${currentSongPosition}px)`;
    songCoverContainer.style.transition = 'transform 0.5s';

    if (currentSongPosition < -songCoverWidth * (songCoverContainer.childElementCount - 1)) {
        currentSongPosition = 0;
        songCoverContainer.style.transform = `translateX(${currentSongPosition}px)`;
        songCoverContainer.style.transition = '';
    }
  }
