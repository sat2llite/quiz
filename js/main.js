// 햄버거 메뉴
const hamburgerMenu = document.querySelector(".m_header_ul");
const hamburgerIcon = document.querySelector(".hamburger");
const hamburgerIconOn = document.querySelector(".hamburger.on");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("on");
  document.body.classList.toggle("no_scroll");

  if (hamburgerIcon.classList.contains("on")) {
    hamburgerMenu.style.visibility = "visible";
    hamburgerMenu.style.opacity = "1";
    gnb.style.visibility = "hidden";
  } else {
    hamburgerMenu.style.visibility = "hidden";
    hamburgerMenu.style.opacity = "0";
    gnb.style.visibility = "visible";
  }
});

// index.html
const inputBox = document.querySelector("input");
const start = document.querySelector(".start_btn");

// quiz.html
const img = document.querySelector(".quiz_page > h1");
const question = document.querySelector(".quiz_page > h3");
const next = document.querySelector(".next_btn");