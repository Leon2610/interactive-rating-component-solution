const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thanks-state");
const btns = document.querySelectorAll(".btn-container button");
const span = document.querySelector("span");
const btnSubmit = document.querySelector(".btn-submit");

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const rating = e.target.textContent;
    span.textContent = rating;
  });
});

btnSubmit.addEventListener("click", () => {
  ratingState.classList.add("hide");
  thankYouState.classList.remove("hide");
});
