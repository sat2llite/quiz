export * from "./quiz.js";

// *quiz.html
import data from "./quizList.js";

const ques = document.querySelector(".quiz_wrap > h3"); // 문제
const quizImg = document.querySelector(".quiz_img"); // 문제
const nextBtn = document.querySelector(".next_btn");
const result_btn = document.querySelector(".result_btn");
const answerInput = document.querySelector("#answer");
let index = 0; // 문제의 번호를 기억하는 변수 (현재 문제를 가리키는 변수)
let score = 0; // 점수를 기억하는 변수

const randomQuizList = new Array(10); // 랜덤 문제 저장 배열(10개)
const answerList = new Array(10); // 답 저장 배열
const scoreList = new Array(10); // 답 비교 배열

// 랜덤 문제
for (let index = 0; index < randomQuizList.length; index++) {
  const randomNumber = Math.floor(Math.random() * 10); // 난수 발생
  data[randomNumber];
  // randomQuizList[index] = data[randomNumber];  

  // 중복제거
  if (randomQuizList.indexOf(data[randomNumber]) === -1) {
    // data[randomNumber];
    randomQuizList[index] = data[randomNumber];
  } else {
    index--;
  }
  // console.log(randomNumber);
}

ques.innerHTML = `${randomQuizList[index].question}`;

// 다음 버튼 클릭이벤트
nextBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // input 값 저장
  answerList[index] = answerInput.value;
  index++;

  if (index >= randomQuizList.length - 1) {
    nextBtn.style.display = "none";
    result_btn.style.display = "block";
  }

  ques.innerHTML = `${randomQuizList[index].question}`;

  // input 초기화
  answerInput.value = "";
  // console.log(answerList);

  quizImg.src = "img/quiz" + [index + 1] + ".png";
});

// 결과보기 버튼 클릭 이벤트
result_btn.addEventListener("click", () => {
  answerList[randomQuizList.length - 1] = answerInput.value;

  // console.log(answerList);

  for (let index = 0; index < answerList.length; index++) {
    if (randomQuizList[index].answer == answerList[index]) {
      score += 10;
      scoreList[index] = true;
    } else {
      scoreList[index] = false;
    }
  }
  // const answerScore = JSON.stringify(scoreList);
  window.localStorage.setItem("score", score);
  window.localStorage.setItem("scoreList", JSON.stringify(scoreList));
});