import { LoyaltyUser } from './enum.js'
import { Price, Country } from './type.js'

export interface Review{
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
}

export interface Properties {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number | string;
    country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}