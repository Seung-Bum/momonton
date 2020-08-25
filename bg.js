const body = document.querySelector("body");

const IMG_NUMBER = 10;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `image/${imgNumber + 1}.jpg`; // 0이 나올수 있어 +1
  image.classList.add("bgImage"); //class add
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER); //floor 소수점x
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
