// *result.js
const resultTitle = document.querySelector(".result_wrap > h3"); // 점수(결과)
const replayBtn = document.querySelector(".replay_btn"); // 다시하기 버튼

// locaStorage
const nameString = window.localStorage.getItem("name")
const resultString = window.localStorage.getItem("score")
console.log(resultString);

resultTitle.innerHTML = `${nameString}님의 점수는 ${resultString}점 입니다.`;

replayBtn.addEventListener("click", () => {
  localStorage.clear();
})