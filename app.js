const heroBtn = document.querySelector(".hero-btn");
const heroSec = document.querySelector(".hero");
const mainSec = document.querySelector(".main");
const returnBtn = document.querySelector(".return");

heroBtn.addEventListener("click", () => {
  mainSec.classList.remove("remove");
  heroSec.classList.add("remove");
});

returnBtn.addEventListener("click", () => {
  mainSec.classList.add("remove");
  heroSec.classList.remove("remove");
});
