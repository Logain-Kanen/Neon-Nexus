let theme = "";
theme = localStorage.getItem("theme");
function setTheme() {
  if (theme == "light") {
    document.querySelector("main").classList.add("light-main");
    document.querySelector("body").classList.add("light-body");
    document.querySelector(".main-h1").classList.add("light-slogan");
    document.querySelector(".popup-div").classList.add("light-popup");
    document.querySelectorAll(".main-div").forEach((e) => {
      e.classList.add("light-div");
    });
    document.querySelectorAll(".main-h2").forEach((e) => {
      e.classList.add("light-h2");
    });
    document.querySelectorAll(".cart-btn").forEach((e) => {
      e.classList.add("light-btn");
    });
  } else if (theme == "dark") {
    document.querySelector("main").classList.remove("light-main");
    document.querySelector("body").classList.remove("light-body");
    document.querySelector(".main-h1").classList.remove("light-slogan");
    document.querySelector(".popup-div").classList.remove("light-popup");
    document.querySelectorAll(".main-div").forEach((e) => {
      e.classList.remove("light-div");
    });
    document.querySelectorAll(".main-h2").forEach((e) => {
      e.classList.remove("light-h2");
    });
    document.querySelectorAll(".cart-btn").forEach((e) => {
      e.classList.remove("light-btn");
    });
  }
}

function themeSwitch() {
  if (theme == "dark" || theme == null) {
    localStorage.setItem("theme", "light");
    theme = localStorage.getItem("theme");
    setTheme();
  } else if (theme == "light") {
    localStorage.setItem("theme", "dark");
    theme = localStorage.getItem("theme");
    setTheme();
  }
}
