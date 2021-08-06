const questionContainer = document.querySelectorAll(".question-container");
const questionArrow = document.querySelectorAll(".arrow");
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");

questionArrow.forEach((element, index) => {
  element.addEventListener("click", () => {
    answer[index].classList.toggle("answer-active");
    element.classList.toggle("rotate");
    question[index].classList.toggle("question-font");
  });
});
