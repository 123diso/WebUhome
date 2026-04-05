export interface House {
  id: number;
  title: string;
  price: number;
  distance: number;
  type: string;
  lifeStyle: string;
  images: string[];
  description: string;
  private: boolean;
  shared: boolean;
  furnished: boolean;
  unfurnished: boolean;
  petFriendly: boolean;
}
