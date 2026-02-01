
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'truffles' | 'bars' | 'collections';
}

export enum Page {
  Home = 'home',
  Products = 'products',
  About = 'about',
  Contact = 'contact'
}
