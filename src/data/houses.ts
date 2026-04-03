import type { House } from '../types/House';

export const houses: House[] = [
  {
    id: 1,
    title: 'Cozy Share House',
    price: 750,
    distance: 8,
    type: 'Private',
    imagen: 'https://i.pinimg.com/1200x/c1/e5/c3/c1e5c3911e549f0bee199dbf73e98908.jpg ',
    description: 'Nice place near campus',
  },
  {
    id: 2,
    title: 'Shared Room',
    price: 600,
    distance: 30,
    type: 'Shared',
    imagen: 'https://i.pinimg.com/1200x/22/70/e4/2270e485baa4b903810d459f6b225b5c.jpg',
    description: 'Affordable shared room',
  },
  {
    id: 3,
    title: 'Girls Only Room',
    price: 450,
    distance: 2,
    type: 'Private',
    imagen: '',
    description: 'Close and comfortable',
  },
];
