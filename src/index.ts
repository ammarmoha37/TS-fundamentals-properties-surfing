import {showTotalReviews, displayUser, getFirstTwoReviews, showPropertyDetails} from './utils.js';
import { Review, Properties} from './interfaces.js'
import { LoyaltyUser, Permissions } from './enum.js';
import { Price, Country } from './type.js';

const myMainProperty = document.querySelector(".main-image")!;
const reviewsButton = document.querySelector('button')!;
const reviewsContainer = document.querySelector('.reviews')!;
const container = document.querySelector('.container')!;
const propertiesContainer = document.querySelector('.properties')!;
const footer = document.querySelector('.footer')!;

let isLoggedIn:  boolean; 
isLoggedIn = true;

const you : {
  userName: string;
  isReturning: boolean;
  permissions: Permissions;
  age: number;
  stayedAt: string[];
} = {
  userName: 'Bobby',
  isReturning: true,
  permissions: Permissions.ADMIN,
  age: 22,
  stayedAt : ['florida', 'new-times-squar', 'tokyo'],
};

const reviews : Review[] = [
  {
    name: 'Tom',
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
  },
  {
    name: 'Ally',
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
  },
  {
    name: 'Omar',
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
  }
]

showTotalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

displayUser(you.isReturning, you.userName);

class mainProperty {
  src: string;
  title: string;
  reviews: {name: string; stars: number; loyaltyUser: boolean;}[];
  constructor(src: string, title: string, reviews:{name: string; stars: number; loyaltyUser: boolean;}[]) {
    this.src = src;
    this.title = title;
    this.reviews = reviews;
  }
}

let myProperty = new mainProperty(
  '../public/imgs/main-property.jpeg',
  'Texas property',
  [{
    name: 'Mike',
    stars: 4,
    loyaltyUser: true,
  }]
);



const image = document.createElement('img');
image.setAttribute('src', myProperty.src);
image.setAttribute('class', 'main-property');
myMainProperty.appendChild(image);

let count = 0
const displayReviews = (reviews : {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
}[]) => {
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
}

reviewsButton.addEventListener('click', () => displayReviews(reviews));

const properties : Properties[] = [
  {
    image: '../public/imgs/colombia-property.jpg',
    title: 'Colombian Shack',
    price: 30,
    location: {
        firstLine: 'shack 37',
        city: 'Bogota',
        code: 45632,
        country: 'Colombia'
    },
    contact: [ +34589027906, 'marywinklelinkle@gmail.com'],
    isAvailable: true,
  },
  {
    image: '../public/imgs/poland-property.jpg',
    title: 'Polish Cottage',
    price: 25,
    location: {
        firstLine: 'no 23',
        city: 'Gdansk',
        code: 343903,
        country: 'Poland'
    },
    contact: [ +90390245784, 'garyadvices@hotmail.com'],
    isAvailable: false,
  },
  {
    image: '../public/imgs/london-property.jpg',
    title: 'London Flat',
    price: 35,
    location: {
        firstLine: 'flat 15',
        city: 'London',
        code: 35433,
        country: 'United Kingdom',
    },
    contact: [+2934589732, 'andyluger@aol.com'],
    isAvailable: true,
  },
  {
    image: '../public/imgs/malaysian-hotel.jpeg',
    title: 'Malia Hotel',
    price: 20,
    location: {
        firstLine: 'Room 4',
        city: 'Malia',
        code: 45334,
        country: 'Malaysia'
    },
    contact: [ +60349822083, 'lolee34@gmail.com'],
    isAvailable: false
  }
]

//Adding properties
if (propertiesContainer) {
  for (let i = 0; i < properties.length; i++) {
    const cardProperty = document.createElement('div');
    cardProperty.classList.add('card-property');
    cardProperty.innerHTML = properties[i].title;
    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    cardProperty.appendChild(image);
    propertiesContainer.appendChild(cardProperty);
    // showPropertyDetails(you.permissions, cardProperty, properties[i].price);
    showPropertyDetails(isLoggedIn, cardProperty, properties[i].price);
  }
}

let currentLocation: [string, string, number] = [
  'Turkey', '15:42', 12
];

footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';
