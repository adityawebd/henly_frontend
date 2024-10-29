import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import ShopSidebar from "../../components/ShopSidebar";
import { ArrowRight, LayoutGrid, AlignJustify } from "lucide-react";
import ProductCardList from "@/components/ProductCardList";
import Layout from "@/components/Layout";

import { productsData } from "@/data/products";

const productsPerPage = 15;

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const [isGridView, setIsGridView] = useState(true);
  const handleLayoutChange = (isGrid) => {
    setIsGridView(isGrid);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      let filteredProducts;

      // Normalize the category from the URL
      const normalizedCategory = category
        ? category.trim().toLowerCase().replace(/-/g, " ")
        : "";
      const normalizedCategoryForComparison = normalizedCategory.replace(
        /\s+/g,
        " "
      );

      if (normalizedCategory === "all" || normalizedCategory === "") {
        // Show all products if category is "all"
        filteredProducts = productsData;
      } else {
        // Filter products by selected category
        filteredProducts = productsData.filter(
          (product) =>
            product.category.toLowerCase().trim().replace(/\s+/g, " ") ===
            normalizedCategoryForComparison
        );
      }

      // Set the total number of products found
      setTotalProducts(filteredProducts.length);

      // Calculate products to display based on the current page
      const startIndex = (currentPage - 1) * productsPerPage;
      const paginatedProducts = filteredProducts.slice(
        startIndex,
        startIndex + productsPerPage
      );

      setProducts(paginatedProducts);
    };

    if (category) {
      fetchProducts();
    }
  }, [category, currentPage]);

  const handleCategoryChange = (selectedCategory) => {
    // Reseting current page to 1 when changing category
    setCurrentPage(1);
    router.push(`/shop/${selectedCategory}`);
  };

  const handleNextPage = () => {
    if ((currentPage - 1) * productsPerPage + products.length < totalProducts) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Effect to check screen size and set the initial view mode
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // If the screen width is less than 768px (mobile), set list view
        setIsGridView(false);
      } else {
        // For larger screens, set grid view
        setIsGridView(true);
      }
    };

    // Set the initial view mode on the first render
    handleResize();

    // Add event listener to handle window resizing
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Layout>
      {/* list and grid view */}
      <div className="flex justify-center items-center">
        <div className="hidden lg:flex py-8">
          <ul className="flex space-x-4 bg-primary/20 rounded-full p-2">
            <li
              className={` rounded-full px-2 ${
                isGridView ? "bg-primary text-white" : "text-whiteClr"
              }`}
            >
              <button
                className="p-2 rounded flex justify-center items-center"
                title="Grid Layout"
                onClick={() => handleLayoutChange(true)}
              >
                <LayoutGrid size={20} strokeWidth={1.5} />{" "}
                <span className="text ml-2">Grid</span>
              </button>
            </li>
            <li
              className={`rounded-full px-2 ${
                !isGridView ? "text-white bg-primary" : "text-primary"
              }`}
            >
              <button
                className="p-2 rounded flex justify-center items-center"
                title="List Layout"
                onClick={() => handleLayoutChange(false)}
              >
                <AlignJustify size={20} strokeWidth={1.5} />{" "}
                <span className="text ml-2">List</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="hidden">
          <ul className="flex space-x-4 bg-darkgrayClr rounded-full p-2 d-none">
            <li
              className={` rounded-full px-2 ${
                !isGridView ? "text-brightblueClr bg-whiteClr" : "text-whiteClr"
              }`}
            >
              <button
                className="p-2 rounded flex justify-center items-center"
                title="List Layout"
                onClick={() => handleLayoutChange(false)}
              >
                <AlignJustify size={20} strokeWidth={1.5} />{" "}
                <span className="text ml-2">List</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-primary/20 p-10 rounded-xl">
        {/* Sidebar Filter */}
        <div className="w-full md:w-1/4 p-4">
          <ShopSidebar onCategoryChange={handleCategoryChange} />
        </div>

        {/* Products Grid */}
        <div className="w-full md:w-3/4 p-4 rounded-xl bg-primary shadow-2xl">
          {products.length > 0 ? (
            <>
              {/* Product Fetching */}
              {isGridView ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                      <ProductCard key={index} product={product} />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
                    {products.map((product, index) => (
                      <ProductCardList key={index} product={product} />
                    ))}
                  </div>
                </>
              )}

              {/* Pagination Controls */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 text-white bg-blue-500 rounded ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={
                    (currentPage - 1) * productsPerPage + products.length >=
                    totalProducts
                  }
                  className={`px-4 py-2 text-white bg-blue-500 rounded ${
                    (currentPage - 1) * productsPerPage + products.length >=
                    totalProducts
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <p className="text-white">No products available in this category.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
