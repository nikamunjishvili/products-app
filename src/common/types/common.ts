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
export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
}