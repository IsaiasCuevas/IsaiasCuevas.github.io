const hero = document.querySelector(".hero");
const intro = document.querySelector("#intro");
const picture = document.querySelector("#picture");
const links = document.querySelector(".links");
const howdy = document.querySelector("#howdy");

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "100%" })
  .fromTo(howdy, 2, { opacity: 0 }, { opacity: 1 }, "-=.25")
  .fromTo(picture, 1.5, { opacity: 0 }, { opacity: 1 }, "-=1")
  .fromTo(hero, 1.2, { width: "100%" }, { width: "95%" }, "-=2.5");
