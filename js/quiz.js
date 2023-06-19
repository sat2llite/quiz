export * from "./quiz.js";

// *quiz.html
import data from "./quizList.js";

const ques = document.querySelector(".quiz_wrap > h3");
const quizImg = document.querySelector(".quiz_img");
const nextBtn = document.querySelector(".next_btn");
const result_btn = document.querySelector(".result_btn");
const answerInput = document.querySelector("#answer");

/**
 * 문제의 번호를 기억하는 변수 (현재 문제를 가리키는 변수)
 */
let index = 0;

/**
 * 점수를 기억하는 변수
 */
let score = 0;

/**
 * 제한시간을 표시하는 변수
 */
let count = 10;

/**
 * 랜덤 문제 저장 배열(10개)
 */
const randomQuizList = new Array(10); //

/**
 * 답 저장 배열
 */
const answerList = new Array(10);

/**
 * 답 비교 배열
 */
const scoreList = new Array(10);

/**
 * 문제 은행에서 랜덤으로 문제를 뽑아서 랜던문제 배열에 저장
 * 실행 시점 : PageLoad()
 */
for (let index = 0; index < randomQuizList.length; index++) {
    const randomNumber = Math.floor(Math.random() * 20); // 난수 발생

    // 중복제거
    if (randomQuizList.indexOf(data[randomNumber]) === -1) {
        randomQuizList[index] = data[randomNumber];
    } else {
        index--;
    }
}

/**
 * 첫번 째 랜덤문제 배열의 질문 표시
 * 실행 시점 : PageLoad()
 */
ques.innerHTML = `${randomQuizList[index].question}`;

/**
 * 남은 시간을 설정하는 Interval Function
 * 실행 시점 : PageLoad()
 */
const intervalId = setInterval(() => {
    if (count === 0) {
        // 다음버튼 및 결과보기 버튼의 표시 유무를 확인하여 이벤트 실행 -- Teacher 작성
        if (result_btn.style.display != "block") {
            nextBtn.click();
        } else {
            result_btn.click();
        }

        count = 10;
    }

    document.querySelector("h2").innerHTML = `남은 시간 : ${count}`;
    count--;
}, 1000);

/**
 * 다음 문제 버튼 클릭이벤트
 * 실행 시점 : nextBtn Click()
 */
nextBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // 답변 값 저장
    answerList[index] = answerInput.value;
    index++;

    // 결과보기 버튼을 표시할지 말지 결정하는 조건문
    if (index >= randomQuizList.length - 1) {
        nextBtn.style.display = "none";
        result_btn.style.display = "block";
    }

    // 다음 문제 표시
    ques.innerHTML = `${randomQuizList[index].question}`;

    // 답변란 초기화
    answerInput.value = "";

    // 다음 문제에 맡게 퀴즈 이미지 변경
    quizImg.src = "img/quiz" + [index + 1] + ".png";

    // 남은시간 초기화 및 남은 시간 즉시 표시 -- Teacher 작성
    count = 10;
    document.querySelector("h2").innerHTML = `남은 시간 : ${count}`;
});

/**
 * 결과보기 버튼 클릭 이벤트
 * 실행 시점 : result_btn Click()
 */
result_btn.addEventListener("click", () => {
    answerList[randomQuizList.length - 1] = answerInput.value;

    for (let index = 0; index < answerList.length; index++) {
        if (randomQuizList[index].answer == answerList[index]) {
            score += 10;
            scoreList[index] = true;
        } else {
            scoreList[index] = false;
        }
    }

    window.localStorage.setItem("score", score);
    window.localStorage.setItem("scoreList", JSON.stringify(scoreList));

    clearInterval(intervalId);
});
