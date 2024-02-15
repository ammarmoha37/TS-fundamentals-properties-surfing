"use strict";
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const reviewTotalDisplay = document.querySelector('#reviews');
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
function displayUser(isReturning, userName) {
    if (returningUserDisplay) {
        if (isReturning) {
            returningUserDisplay.innerHTML = 'back';
        }
    }
    if (userNameDisplay) {
        userNameDisplay.innerHTML = userName;
    }
}
displayUser(you.isReturning, you.userName);
const showTotalReviews = (value, reviewer, loyality) => {
    const showStar = loyality ? '🌟' : '';
    reviewTotalDisplay.innerHTML = value + ' reviews' + '| last review by ' + reviewer + ' ' + showStar;
};
showTotalReviews(reviews[0].stars, reviews[0].name, reviews[0].loyalityUser);
