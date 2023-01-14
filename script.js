const rateUsCard = document.querySelector(".card--rate-us");
const thankYouCard = document.querySelector(".card--thank-you");
const ratingForm = document.querySelector(".js-rating-form");
const userRatingElement = document.querySelector(".js-user-rating");
const ratingBtns = document.querySelectorAll('[name="form-rating"]');

ratingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let rating = "";
    ratingBtns.forEach((btn, id) => {
        if (btn.checked) {
            rating = id + 1;
        }
    });

    if (rating === "") return;

    userRatingElement.textContent = rating;
    rateUsCard.classList.remove("card--active");
    thankYouCard.classList.add("card--active");
});
