
import { Product } from './types';

export const WHATSAPP_NUMBER = '1234567890'; // Replace with real number
export const BRAND_SLOGAN = "Le coin du chocolat";

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Noire Intense Truffles',
    description: '70% Ecuadorian cocoa ganache dusted in fine cocoa powder.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d100c9?auto=format&fit=crop&q=80&w=800',
    category: 'truffles'
  },
  {
    id: '2',
    name: 'Gold-Flecked Praliné',
    description: 'Hazelnut and almond paste encased in signature milk chocolate and real 24k gold leaf.',
    price: 65,
    image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80&w=800',
    category: 'collections'
  },
  {
    id: '3',
    name: 'Fleur de Sel Caramel',
    description: 'Buttery soft caramel infused with French sea salt in a dark chocolate shell.',
    price: 38,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=800',
    category: 'truffles'
  },
  {
    id: '4',
    name: 'L’Origine Madagascar',
    description: 'Single-origin dark chocolate bar with notes of red fruits and citrus.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=800',
    category: 'bars'
  },
  {
    id: '5',
    name: 'Midnight Lavender',
    description: 'A delicate floral infusion within our darkest 85% cocoa blend.',
    price: 22,
    image: 'https://images.unsplash.com/photo-1516559828984-fb3b923ca2d2?auto=format&fit=crop&q=80&w=800',
    category: 'bars'
  },
  {
    id: '6',
    name: 'The Grand Collection',
    description: 'A curated selection of our 24 most iconic masterpieces in a velvet box.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1544787210-228393c79326?auto=format&fit=crop&q=80&w=800',
    category: 'collections'
  }
];
