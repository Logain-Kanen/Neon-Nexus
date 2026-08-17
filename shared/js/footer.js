let theme;
localStorage.setItem("theme", "dark");

function themeSwitch() {
  theme = localStorage.getItem("theme");
  if ((theme = "dark")) {
    document.querySelector("main").classList.add("light-main");
    document.querySelector("body").classList.add("light-body")
  }
}
