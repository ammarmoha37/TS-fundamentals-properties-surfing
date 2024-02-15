"use strict";
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const you = {
    userName: 'Bobby',
    isReturning: true,
};
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
