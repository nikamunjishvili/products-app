export interface IconProps {
  width: number;
  height: number;
}

export interface Producttypes {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};