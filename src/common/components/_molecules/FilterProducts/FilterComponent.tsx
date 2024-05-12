/** @format */

import React, { useState } from "react";



interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
}

interface Props {
  products: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
}

const FilterComponent: React.FC<Props> = ({
  products,
  setFilteredProducts,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);
    if (category) {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(null);
    }
  };

  const categoryCounts: { [key: string]: number } = products.reduce(
    (acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    },
    {}
  );

  const categories = Object.keys(categoryCounts);

  return (
    <div className="m-5 mt-20">
      <h1 className="text-2xl">All Categories</h1>
      {categories.map((category) => (
        <div key={category}>
          <input
            type="radio"
            id={category}
            name="category"
            value={category}
            checked={selectedCategory === category}
            onChange={handleCategoryChange}
            className="h-4 w-4 accent-bordergreen mt-3"
          />
          <label htmlFor={category} className="p-3">
            {category}{" "}
            <span className="text-gray">({categoryCounts[category]})</span>
          </label>
        </div>
      ))}
      <input
        type="radio"
        id="all"
        name="category"
        value=""
        checked={!selectedCategory}
        onChange={handleCategoryChange}
        className="h-4 w-4 accent-bordergreen mt-3"
      />
      <label htmlFor="all" className="p-3">
        All Products<span className="text-gray">({products.length})</span>
      </label>
    </div>
  );
};

export default FilterComponent;
