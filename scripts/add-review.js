window.addEventListener("load", () => {
    const reviewForm = document.getElementById('add-review-form');
    const reviewTable = document.getElementById('all-reviews_container');
    const reviewRowTemplate = document.getElementById('review-row-template');

    reviewForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = reviewForm.name.value
        const surname = reviewForm.surname.value
        const type = reviewForm.type.value
        const review = reviewForm.review.value
        const reviewStat = reviewForm.review_stat.value

        const newRow = reviewRowTemplate.content.cloneNode(true);

        newRow.querySelector('.reviewer_name').textContent = name;
        newRow.querySelector('.reviewer_surname').textContent = surname;
        newRow.querySelector('.reviewer_event_type').textContent = type;
        newRow.querySelector('.reviewer_text').textContent = review;
        newRow.querySelector('.reviewer_event_stat').textContent = reviewStat;

        reviewTable.querySelector('tbody').appendChild(newRow);
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push({name, surname, type, review, reviewStat});
        localStorage.setItem('reviews', JSON.stringify(reviews));
        reviewForm.reset();
    });
})

window.addEventListener('load', function (event) {
    const reviewTable = document.getElementById('all-reviews_container');
    const reviewRowTemplate = document.getElementById('review-row-template');
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

    savedReviews.forEach(function(review) {
        const newRow = reviewRowTemplate.content.cloneNode(true);
        newRow.querySelector('.reviewer_name').textContent = review.name;
        newRow.querySelector('.reviewer_surname').textContent = review.surname;
        newRow.querySelector('.reviewer_event_type').textContent = review.type;
        newRow.querySelector('.reviewer_text').textContent = review.review;
        newRow.querySelector('.reviewer_event_stat').textContent = review.reviewStat;
        reviewTable.querySelector('tbody').appendChild(newRow);
    });
});





