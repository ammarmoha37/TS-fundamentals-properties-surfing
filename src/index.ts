const returningUserDisplay  = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');

const you : {
  userName: string;
  isReturning: boolean;
} = {
  userName: 'Bobby',
  isReturning: true,
}

function displayUser(isReturning : boolean, userName : string) {
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