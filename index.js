import { animateText, shuffle } from "./helper";

function fadeIn(target) {
  animateText(target, {
    opacity: [0, 1],
    duration: 2000,
    easing: "easeInOutQuad",
  });
}

function slideIn(target, direction) {
  animateText(target, {
    translateX: [direction === "left" ? -100 : 100, 0],
    duration: 2000,
    easing: "easeOutExpo",
  });
}

function flip(target) {
  animateText(target, {
    rotateY: [180, 0],
    duration: 2000,
    easing: "easeInOutQuad",
  });
}

function zoomIn(target) {
  animateText(target, {
    scale: [0, 1],
    duration: 2000,
    easing: "easeInOutQuad",
  });
}

function spin(target) {
  animateText(target, {
    rotate: [360, 0],
    duration: 2000,
    easing: "easeInOutQuad",
  });
}

function bounce(target) {
  animateText(target, {
    translateY: [-20, 20],
    loop: true,
    direction: "alternate",
    duration: 1000,
    easing: "easeInOutQuad",
  });
}

function wiggle(target) {
  animateText(target, {
    translateX: [-5, 5],
    loop: true,
    direction: "alternate",
    duration: 500,
    easing: "easeInOutQuad",
  });
}

function typing(target) {
  let text = target.innerHTML;
  target.innerHTML = "";
  let i = 0;
  let interval = setInterval(() => {
    target.innerHTML += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
    }
  }, 50);
}

function textillate(target) {
  animateText(target, {
    rotate: [30, -30, 0],
    scale: [1.5, 0.5, 1],
    skew: [15, -15, 0],
    duration: 2000,
    easing: "easeInOutQuad",
    loop: true,
    direction: "alternate",
  });
}

function rainbow(target) {
  let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  let i = 0;
  let interval = setInterval(() => {
    target.style.color = colors[i];
    i++;
    if (i >= colors.length) {
      i = 0;
    }
  }, 200);
}

function jumble(target) {
  let text = target.innerHTML;
  let letters = text.split("");
  let jumbled = shuffle(letters);
  target.innerHTML = jumbled.join("");
  animateText(target, {
    duration: 2000,
    easing: "easeOutExpo",
    update: function (anim) {
      target.innerHTML = text;
    },
  });
}

function fadeOut(target) {
  animateText(target, {
    opacity: [1, 0],
    duration: 2000,
    easing: "easeInOutQuad",
  });
}

function parallax(target) {
  let initialPos = target.getBoundingClientRect().top;
  window.addEventListener("scroll", () => {
    let pos = target.getBoundingClientRect().top;
    target.style.transform = `translateY(${pos - initialPos}px)`;
  });
}

function pulse(target) {
  animateText(target, {
    scale: [1.2, 1],
    duration: 1000,
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
}

function skew(target) {
  animateText(target, {
    skew: [20, 0],
    duration: 2000,
    easing: "easeOutExpo",
  });
}

function blur(target) {
  animateText(target, {
    filter: ["blur(10px)", "blur(0px)"],
    duration: 2000,
    easing: "easeOutExpo",
  });
}

function glitch(target) {
  let text = target.innerHTML;
  let glitchInterval = setInterval(() => {
    let randomIndex = Math.floor(Math.random() * text.length);
    let randomChar = String.fromCharCode(Math.floor(Math.random() * 255));
    let newText =
      text.substring(0, randomIndex) +
      randomChar +
      text.substring(randomIndex + 1);
    target.innerHTML = newText;
  }, 50);
  setTimeout(() => {
    clearInterval(glitchInterval);
    target.innerHTML = text;
  }, 2000);
}

function shatter(target) {
  let text = target.innerHTML;
  let letters = text.split("");
  let positions = [];
  letters.forEach((letter, index) => {
    let position = target.getBoundingClientRect();
    positions.push({
      x: position.left + position.width / 2,
      y: position.top + position.height / 2,
      letter: letter,
    });
  });
  target.innerHTML = "";
  positions.forEach((position) => {
    let span = document.createElement("span");
    span.style.position = "absolute";
    span.style.left = position.x + "px";
    span.style.top = position.y + "px";
    span.innerHTML = position.letter;
    target.appendChild(span);
    animateText(span, {
      translateX: [-100, 100],
      translateY: [-100, 100],
      rotate: [360],
      duration: 2000,
      easing: "easeOutExpo",
      complete: function () {
        target.innerHTML = text;
      },
    });
  });
}

function rotate3D(target) {
  animateText(target, {
    rotateX: [360],
    rotateY: [360],
    rotateZ: [360],
    duration: 2000,
    easing: "easeOutExpo",
  });
}
function flyIn(target, direction) {
  animateText(target, {
    translateY: [direction === "top" ? -100 : 100, 0],
    duration: 2000,
    easing: "easeOutExpo",
  });
}

function textGradient(target) {
  let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  let i = 0;
  let interval = setInterval(() => {
    target.style.background = `linear-gradient(to right, ${colors[i]} 0%, ${
      colors[i + 1] || colors[0]
    } 100%)`;
    i++;
    if (i >= colors.length) {
      i = 0;
    }
  }, 2000);
}

function textShadow(target) {
  animateText(target, {
    textShadow: [
      "5px 5px 0px #fff",
      "10px 10px 0px #fff",
      "15px 15px 0px #fff",
    ],
    duration: 2000,
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
}

function flicker(target) {
  let originalOpacity = window.getComputedStyle(target).opacity;
  animateText(target, {
    opacity: [0, originalOpacity],
    duration: 100,
    loop: true,
    direction: "alternate",
  });
}

module.exports = {
  parallax,
  pulse,
  skew,
  blur,
  glitch,
  shatter,
  rotate3D,
  flyIn,
  textShadow,
  textGradient,
  flicker,
  fadeIn,
  fadeOut,
  jumble,
  rainbow,
  textillate,
  typing,
  wiggle,
  bounce,
  spin,
  zoomIn,
  flip,
  slideIn,
};
