// 햄버거 메뉴
/*
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
*/

// *index.html
const inputBox = document.querySelector("input");
const startBtn = document.querySelector(".start_btn");

// *quiz.html
import data from "./quiz.js";
// console.log(data);

const question = document.querySelector(".quiz_wrap > h3");
const nextBtn = document.querySelector(".next_btn");

// 문제 출력
question.innerHTML=`${data[0].question}`;
console.log(data);

// nextBtn.addEventListener("click", () => {
//   for (let i = 0; i < data.length; i++) {
//     // const element = array[i];
//     question.innerHTML=`${data[i].question}`;
//   }
// })


// input으로 입력받은 데이터