// *quiz.html
import data from "./quizList.js";

const ques = document.querySelector(".quiz_wrap > h3"); // 문제
const nextBtn = document.querySelector(".next_btn");
const result_btn = document.querySelector(".result_btn");
const answerInput = document.querySelector("#answer");
let index = 0; // 문제의 번호를 기억하는 변수
let answer = 0; // 문제의 답을 기억하는 변수

const randomQuizList = new Array(10); // 랜덤 문제 저장 배열(10개)
const answerList = new Array(10); // 답 저장 배열

for (let index = 0; index < randomQuizList.length; index++) {
  const randomNumber = Math.floor(Math.random() * 5) + 1; // 난수 발생
  data[randomNumber].question;
  randomQuizList[index] = data[randomNumber].question;
}

for (let answer = 0; answer < answerList.length; answer++) {
  answerList[answer] = answerInput.value;
}

ques.innerHTML = `${data[index].question}`; // 문제 가져오기

// 다음 버튼 클릭이벤트
nextBtn.addEventListener("click", (event) => {
  event.preventDefault();

  ques.innerHTML = `${randomQuizList[index]}`;
  index++;

  if (index >= randomQuizList.length) {
    nextBtn.style.display="none";
    result_btn.style.display="block";
  }


  // input 값 저장
  console.log(answerList);

  // input 초기화
  answerInput.value = "";
});



// const randomQuizList = new Array(10);

// for (let i = 0; i < randomQuizList.length; i++) {
//     const randomNumber = Math.floor(Math.random() * 5) + 1;
//     randomQuizList.push(data[randomNumber]);
// }

// console.log(randomQuizList);

// ques.innerHTML = `${randomQuizList[index].question}`
