// *index.html
let names; // 사용자 이름을 기억하는 변수
let inputBox = document.getElementById("name");
const startBtn = document.querySelector(".start_btn");

startBtn.addEventListener("click", () => {
  names = inputBox.value;
  
  window.localStorage.setItem("name", names);

  inputBox.value = "";
})