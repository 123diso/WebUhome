import type { House } from '../types/House';
import img1 from '../assets/1-1.png';
import img2 from '../assets/1-2.png';
import img3 from '../assets/1-3.png';
import img4 from '../assets/2-1.png';
import img5 from '../assets/2-2.png';
import img6 from '../assets/2-3.png';
import img7 from '../assets/3-1.png';
import img8 from '../assets/3-2.png';
import img9 from '../assets/3-3.png';

export const houses: House[] = [
  {
    id: 1,
    title: 'Cozy Share House',
    price: 750,
    distance: 8,
    type: 'House',
    lifeStyle: 'quiet',
    images: [img1, img2, img3],
    description:
      'Looking for a comfortable and well-located place to live? We have a private room available in a spacious 6-bedroom house just minutes away from Harvard University.The room is for single occupancy only, you will not have to share it. The house currently has 8 residents and offers a welcoming, respectful, and friendly environment.',
    private: true,
    shared: false,
    furnished: true,
    unfurnished: false,
    petFriendly: true,
    rating: 4.3,
    reviews: 5,
    beds: 6,
    baths: 7,
    transport: 2,
  },
  {
    id: 2,
    title: 'Male Roommate Wanted – Shared Room',
    price: 600,
    distance: 30,
    type: 'Room',
    lifeStyle: 'social',
    images: [img4, img5, img6],
    description:
      'We are currently 3 girls and 1 guy living together, and we’re looking for one more male roommate to join our home near Harvard University.The available spot is in a large shared bedroom. You would have your own half of the room, including space for your bed and desk. The room is spacious enough to feel comfortable, and you’re free to decorate your side however you like to make it feel like home.',
    private: false,
    shared: true,
    furnished: false,
    unfurnished: true,
    petFriendly: false,
    rating: 4.0,
    reviews: 5,
    beds: 4,
    baths: 3,
    transport: 3,
  },
  {
    id: 3,
    title: 'Room Available – Girls Only',
    price: 450,
    distance: 2,
    type: 'Room',
    lifeStyle: 'nightlife',
    images: [img7, img8, img9],
    description:
      'Two friendly girls are looking for a third female roommate to join our cozy home near Harvard University.The available room is private (not shared). It’s small, but it has everything you need to feel comfortable and organized. It includes a loft-style bed (bunk style) with a desk conveniently located underneath — perfect for studying and saving space.',
    private: false,
    shared: true,
    furnished: true,
    unfurnished: false,
    petFriendly: false,
    rating: 4.6,
    reviews: 3,
    beds: 6,
    baths: 3,
    transport: 1,
  },
];
