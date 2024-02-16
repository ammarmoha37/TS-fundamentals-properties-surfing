import { LoyaltyUser } from "./enum.js";
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const reviewTotalDisplay = document.querySelector('#reviews');
export const showTotalReviews = (value, reviewer, loyalty) => {
    const showStar = LoyaltyUser.GOLD_USER ? '🌟' : '';
    reviewTotalDisplay.innerHTML = value + ' review' + multipuleReviews(value) + ' | last review by ' + reviewer + ' ' + showStar;
};
export const displayUser = (isReturning, userName) => {
    if (returningUserDisplay) {
        if (isReturning) {
            returningUserDisplay.innerHTML = 'back';
        }
    }
    if (userNameDisplay) {
        userNameDisplay.innerHTML = userName;
    }
};
const multipuleReviews = (value) => {
    if (value > 1 || value == 0) {
        return 's';
    }
    else
        return '';
};
export const getFirstTwoReviews = (reviews) => {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
};
export const showPropertyDetails = (value, element, price) => {
    if (value) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
};
