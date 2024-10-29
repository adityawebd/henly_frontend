// BestSellers.js
import React from "react";
import { productsData } from "@/data/products"; // Adjust the path as needed
import ProductCard from "@/components/ProductCard"; // Ensure this component displays individual product details

const BestSellers = () => {
  // Assuming productsData contains a property 'isBestSeller' to filter best sellers
  const bestSellers = productsData.filter((product) => product.isBestSeller);

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-black text-center mb-5 py-2">
          Best Sellers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {bestSellers.length > 0 ? (
            bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-gray-600">
              No best sellers available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
