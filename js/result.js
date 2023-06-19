// *result.js
const resultTitle = document.querySelector(".result_wrap > h3"); // 점수(결과)
const resultText = document.querySelector(".result_wrap > p"); // 틀린 문제
const replayBtn = document.querySelector(".replay_btn"); // 다시하기 버튼
const tableResult = document.querySelectorAll(".table_result > td > img");
// const createImage = document.createElement("img");

// locaStorage
const nameString = window.localStorage.getItem("name");
const resultString = window.localStorage.getItem("score");
const scoreString = JSON.parse(window.localStorage.getItem("scoreList"));
console.log(scoreString);

resultTitle.innerHTML = `${nameString}님의 점수는 ${resultString}점 입니다.`;

tableResult.forEach((item, index) => {
  
  item.innerHTML = `${scoreString[index]}`;
  if (scoreString[index]) {
    item.src = "img/o.png";
  } else {
    item.src="img/x.png"
  }
})

replayBtn.addEventListener("click", () => {
  localStorage.clear();
});
