import { useState, useRef, useEffect } from "react";
import { categories } from "@/data/categories"; // Adjust the path as needed
import { productsData } from "@/data/products";
import ProductCardList from "./ProductCardList";

export default function HomeShopByCategory() {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]); // References for each tab button

  // Scroll the active tab into view
  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      tabRefs.current[activeTab].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeTab]);

  // Filter products based on the selected category, showing only the first product per category
  const filteredProducts = productsData
    .filter((product) => product.category === categories[activeTab + 1].name) // Skip "All Products"
    .slice(0, 1);

  return (
    <div className="w-full px-20 py-20 bg-primary">
      <h2 className="text-4xl font-bold text-white text-center mb-5 py-2">
        Shop By Category
      </h2>
      {/* Tab headers */}
      <div className="flex gap-8 justify-center items-center overflow-x-auto py-2 px-2 scollbarNone">
        {categories.slice(1).map((category, index) => (
          <button
            key={category.slug}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`py-2 px-4 whitespace-nowrap transition-transform duration-300 transform rounded-full ${
              activeTab === index
                ? "scale-110  bg-secondary text-primary"
                : "text-gray-300"
            } ${activeTab === index ? "font-bold" : "font-normal"}`}
            onClick={() => setActiveTab(index)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="relative w-full overflow-hidden mt-10">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeTab * 100}%)` }}
        >
          {categories.slice(1).map((category, index) => (
            <div key={category.slug} className="w-full px-32 flex-shrink-0 p-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, idx) => (
                  <ProductCardList key={idx} product={product} />
                ))
              ) : (
                <p className="text-center text-white">No products found.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
