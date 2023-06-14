let body = document.body;
let profile = document.querySelector(".header .flex .profile");
let sideBar = document.querySelector(".side-bar");
let searchForm = document.querySelector(".header .flex .search-form");
let darkMode = document.querySelector("#toggle-btn");

document.querySelector("#user-btn").onclick = () => {
  profile.classList.toggle("active");
  searchForm.classList.remove("active");
};
window.onscroll = () => {
  profile.classList.remove("active");
  searchForm.classList.remove("active");
};

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  profile.classList.remove("active");
};

document.querySelector("#menu-btn").onclick = () => {
  body.classList.toggle("active");
  sideBar.classList.toggle("active");
};

document.querySelector(".close-side-bar").onclick = () => {
  body.classList.remove("active");
  sideBar.classList.remove("active");
};

function enableDarkMode() {
  body.classList.add("dark");
  localStorage.setItem("darkMode", "true");
  darkMode.classList.replace("fa-sun", "fa-moon");
}
function disableDarkMode() {
  body.classList.remove("dark");
  localStorage.setItem("darkMode", "false");
  darkMode.classList.replace("fa-moon", "fa-sun");
}
if (localStorage.getItem("darkMode") == "true") {
  enableDarkMode();
}
darkMode.onclick = () => {
  if (localStorage.getItem("darkMode") == "true") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
};
