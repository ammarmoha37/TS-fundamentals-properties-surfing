"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstTwoReviews = exports.displayUser = exports.showTotalReviews = void 0;
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const reviewTotalDisplay = document.querySelector('#reviews');
const showTotalReviews = (value, reviewer, loyality) => {
    const showStar = loyality ? '🌟' : '';
    reviewTotalDisplay.innerHTML = value + ' review' + multipuleReviews(value) + '| last review by ' + reviewer + ' ' + showStar;
};
exports.showTotalReviews = showTotalReviews;
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
exports.displayUser = displayUser;
const multipuleReviews = (value) => {
    if (value > 1 || value == 0) {
        return 's';
    }
    else
        return '';
};
const getFirstTwoReviews = (reviews) => {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
};
exports.getFirstTwoReviews = getFirstTwoReviews;
