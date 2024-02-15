"use strict";
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const reviewTotalDisplay = document.querySelector('#reviews');
const myMainProperty = document.querySelector(".main-image");
const reviewsButton = document.querySelector('button');
const reviewsContainer = document.querySelector('.reviews');
const container = document.querySelector('.container');
const you = {
    userName: 'Bobby',
    isReturning: true,
};
const reviews = [
    {
        name: 'Tom',
        stars: 5,
        loyalityUser: true,
    },
    {
        name: 'Ally',
        stars: 3,
        loyalityUser: false,
    },
    {
        name: 'Omar',
        stars: 4,
        loyalityUser: true,
    }
];
const displayUser = (isReturning, userName) => {
    if (returningUserDisplay) {
        if (isReturning) {
            returningUserDisplay.innerHTML = 'back';
        }
    }
    if (userNameDisplay) {
        userNameDisplay.innerHTML = userName;
    }
};
displayUser(you.isReturning, you.userName);
const showTotalReviews = (value, reviewer, loyality) => {
    const showStar = loyality ? '🌟' : '';
    reviewTotalDisplay.innerHTML = value + ' review' + multipuleReviews(value) + '| last review by ' + reviewer + ' ' + showStar;
};
const multipuleReviews = (value) => {
    if (value > 1 || value == 0) {
        return 's';
    }
    else
        return '';
};
showTotalReviews(reviews[0].stars, reviews[0].name, reviews[0].loyalityUser);
class mainProperty {
    constructor(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
}
let myProperty = new mainProperty('../public/imgs/main-property.jpeg', 'Texas property', [{
        name: 'Mike',
        stars: 4,
        loyalityUser: true,
    }]);
const image = document.createElement('img');
image.setAttribute('src', myProperty.src);
image.setAttribute('class', 'main-property');
myMainProperty === null || myMainProperty === void 0 ? void 0 : myMainProperty.appendChild(image);
let count = 0;
const displayReviews = (reviews) => {
    if (!count) {
        count++;
        const topTwo = getFirstTwoReviews(reviews);
        for (let i = 0; i < topTwo.length; i++) {
            const reviewCard = document.createElement('div');
            reviewCard.classList.add('review-card');
            reviewCard.innerHTML = topTwo[i].stars + ' stars from' + topTwo[i].name;
            reviewsContainer.appendChild(reviewCard);
        }
        container.removeChild(reviewsButton);
    }
};
reviewsButton === null || reviewsButton === void 0 ? void 0 : reviewsButton.addEventListener('click', () => displayReviews(reviews));
const getFirstTwoReviews = (reviews) => {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
};
