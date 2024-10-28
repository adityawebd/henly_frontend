const ProductCard = ({ title }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <img
        src="/placeholder-image.jpg"
        alt={title}
        className="w-full h-40 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">₹12.99</p>
      <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
