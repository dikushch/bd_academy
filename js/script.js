let body = document.querySelector('body');
let header = document.querySelector('.header');
let brg = document.querySelector('.brg');
let logo = document.querySelector('.header__logo');
let links = document.querySelectorAll('.menu__link');

brg.addEventListener('click', function () {
  brg.classList.toggle('open');
  header.classList.toggle('open');
  body.classList.toggle('lock');
});

links.forEach(function (link) {
  link.addEventListener('click', function () {
    brg.classList.remove('open');
    header.classList.remove('open');
    body.classList.remove('lock');
  });
});

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 300) {
    header.classList.add('scrolled');
    logo.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    logo.classList.remove('scrolled');
  }
});
// CANVAS
const canvas = document.querySelector('.hero__canvas');
const ctx = canvas.getContext('2d');
let particleArray = [];

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 2;
    this.count = true;
    this.red = 66;
    this.green = 135;
    this.blue = 225;
  }
  draw() {
    ctx.fillStyle = 'rgba(' + this.red + ', ' + this.green + ', ' + this.blue + ', 0.7)';
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
  update() {
    if (this.count == true) {
      if (this.size < 4) {
        this.size += 0.007;
        if (this.green < 255) {
          this.green++;
        }
      } else {
        this.count = false;
      }
    } else if (this.count == false) {
      if (this.size > 2) {
        this.size -= 0.007;
        if (this.green > 1) {
          this.green--;
        }
      } else {
        this.count = true;
      }
    }
  }
}

for (let y = 0; y < canvas.height; y += 4) {
  for (let x = 0; x < canvas.width; x += 4) {
    particleArray.push(new Particle(x, y));
  }
}

for (let i = 0; i < particleArray.length; i++) {
  particleArray[i].draw();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].draw();
    particleArray[i].update();
  }
  requestAnimationFrame(animate);
}
animate();

let faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('open');
  });
});