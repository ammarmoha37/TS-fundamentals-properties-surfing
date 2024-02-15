"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const myMainProperty = document.querySelector(".main-image");
const reviewsButton = document.querySelector('button');
const reviewsContainer = document.querySelector('.reviews');
const container = document.querySelector('.container');
const you = {
    userName: 'Bobby',
    isReturning: true,
    stayedAt: ['florida', 'new-times-squar', 'tokyo'],
};
const reviews = [
    {
        name: 'Tom',
        stars: 5,
        loyaltyUser: true,
    },
    {
        name: 'Ally',
        stars: 3,
        loyaltyUser: false,
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
    }
];
(0, utils_1.showTotalReviews)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0, utils_1.displayUser)(you.isReturning, you.userName);
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
        loyaltyUser: true,
    }]);
const image = document.createElement('img');
image.setAttribute('src', myProperty.src);
image.setAttribute('class', 'main-property');
myMainProperty.appendChild(image);
let count = 0;
const displayReviews = (reviews) => {
    if (!count) {
        count++;
        const topTwo = (0, utils_1.getFirstTwoReviews)(reviews);
        for (let i = 0; i < topTwo.length; i++) {
            const reviewCard = document.createElement('div');
            reviewCard.classList.add('review-card');
            reviewCard.innerHTML = topTwo[i].stars + ' stars from' + topTwo[i].name;
            reviewsContainer.appendChild(reviewCard);
        }
        container.removeChild(reviewsButton);
    }
};
reviewsButton.addEventListener('click', () => displayReviews(reviews));
