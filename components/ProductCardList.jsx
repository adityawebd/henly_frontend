import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductCardList = React.memo(({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Default image URL if no images are available
  const defaultImage = "/assets/default_product_img.png";

  const { title, price, discountedPrice, images, properties, reviews } =
    product;

  // Calculation Average Rating and Total Reviews
  const totalReviews = Array.isArray(reviews) ? reviews.length : 0;
  const avgRating =
    totalReviews > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
      : 0;

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} className="text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-200 shadow-2xl productPeanutListBG">
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={
              images && images.length > 0
                ? isHovered
                  ? images[1]?.url || defaultImage
                  : images[0]?.url || defaultImage
                : defaultImage
            }
            alt={title}
            className={`w-[300px] h-[300px] object-cover mb-4 rounded-md ${isHovered ? 'hover:shadow-2xl hover:scale-105 transition duration-700':''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
        <div className="w-1/2 p-10">
          <div>
            <h3 className="text-2xl font-bold capitalize">{title}</h3>
            <p className="text-primary/80 text-xl font-bold mt-2">
              ₹{discountedPrice ? discountedPrice : price}
              {discountedPrice && (
                <span className="text-red-500 text-base font-semibold ml-2 line-through">
                  ₹{price}
                </span>
              )}
            </p>

            {/* Render Stars and Rating */}
            <div className="flex items-center mt-2">
              {renderStars(avgRating)}
              <span className="ml-2 text-gray-600">
                {avgRating.toFixed(1)} / 5.0 ({totalReviews} reviews)
              </span>
            </div>
          </div>

          {/* Dynamic Properties Dropdowns */}
          <div className="mt-4 flex  gap-4">
            {properties &&
              properties.map((property, index) => (
                <div key={index} className="mb-2 w-full md:w-1/2">
                  <label className="block text-sm font-semibold mb-1">
                    {property.name}:
                  </label>
                  <select className="w-full p-2 border rounded">
                    {property.values.map((value, idx) => (
                      <option key={idx} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
          </div>

          <button className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-primary/80 hover:shadow-2xl hover:scale-105 transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
});

export default ProductCardList;
