const returningUserDisplay  = document.querySelector('#returning-user')!;
const userNameDisplay = document.querySelector('#user')!;
const reviewTotalDisplay = document.querySelector('#reviews')!;

export const showTotalReviews = (value: number, reviewer: string, loyalty: boolean) => {
  const showStar = loyalty ? '🌟' : '';
  reviewTotalDisplay.innerHTML = value + ' review' + multipuleReviews(value) + '| last review by ' + reviewer + ' ' + showStar; 
}

export const displayUser = (isReturning : boolean, userName : string) => {
  if (returningUserDisplay) {
    if (isReturning) {
      returningUserDisplay.innerHTML = 'back';
    }
  }
  if (userNameDisplay) {
    userNameDisplay.innerHTML = userName;
  }
} 

const multipuleReviews = (value: number) => {
  if (value > 1 || value == 0) {
    return 's';
  } else return '';
}

export const getFirstTwoReviews = (reviews : {name: string; stars: number; loyaltyUser: boolean;}[]) : {name: string; stars: number; loyaltyUser: boolean}[] => {
  const sortedReviews = reviews.sort((a , b) => b.stars - a.stars);
  return sortedReviews.slice(0,2);
}