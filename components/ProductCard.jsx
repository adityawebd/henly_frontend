import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

    // Default image URL if no images are available
    const defaultImage = "/assets/default_product_img.png";

  return (
    <div
      className="border rounded-lg shadow-md p-4 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={
          product.images && product.images.length > 0
            ? isHovered
              ? product.images[1]?.url || defaultImage
              : product.images[0]?.url || defaultImage
            : defaultImage
        }
        alt={product.title}
        className="w-full h-50 object-cover mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600 mt-2">₹{product.price}</p>
      <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
