import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import ShopSidebar from '../../components/ShopSidebar';

const productsData = [
  {
    title: "Sample Product 1",
    description: "This is a detailed description of Sample Product 1.",
    price: 199.99,
    discountedPrice: "149.99",
    category: "Supernatural Protein",
    images: [
      { url: "https://example.com/image1.jpg", altText: "Image 1" }
    ],
    sku: "PROD-001",
    stockQuantity: "50",
  },
  {
    title: "Aditya",
    description: "This is a detailed description of Sample Product 2.",
    price: 249.99,
    discountedPrice: "199.99",
    category: "Aditya Raj Gupta",
    images: [
      { url: "https://example.com/image2.jpg", altText: "Image 2" }
    ],
    sku: "PROD-002",
    stockQuantity: "30",
  },
  {
    title: "Aditya",
    description: "This is a detailed description of Sample Product 2.",
    price: 249.99,
    discountedPrice: "199.99",
    category: "Aditya Raj Gupta",
    images: [
      { url: "https://example.com/image2.jpg", altText: "Image 2" }
    ],
    sku: "PROD-002",
    stockQuantity: "30",
  },
  {
    title: "Aditya",
    description: "This is a detailed description of Sample Product 2.",
    price: 249.99,
    discountedPrice: "199.99",
    category: "Aditya Raj Gupta",
    images: [
      { url: "https://example.com/image2.jpg", altText: "Image 2" }
    ],
    sku: "PROD-002",
    stockQuantity: "30",
  },
  {
    title: "Aditya",
    description: "This is a detailed description of Sample Product 2.",
    price: 249.99,
    discountedPrice: "199.99",
    category: "Aditya Raj Gupta",
    images: [
      { url: "https://example.com/image2.jpg", altText: "Image 2" }
    ],
    sku: "PROD-002",
    stockQuantity: "30",
  },
  {
    title: "Aditya",
    description: "This is a detailed description of Sample Product 2.",
    price: 249.99,
    discountedPrice: "199.99",
    category: "Aditya Raj Gupta",
    images: [
      { url: "https://example.com/image2.jpg", altText: "Image 2" }
    ],
    sku: "PROD-002",
    stockQuantity: "30",
  },
  {
    title: "Aditya",
    description: "This is a detailed description of Sample Product 2.",
    price: 249.99,
    discountedPrice: "199.99",
    category: "Aditya Raj Gupta",
    images: [
      { url: "https://example.com/image2.jpg", altText: "Image 2" }
    ],
    sku: "PROD-002",
    stockQuantity: "30",
  },
  {
    title: "Aditya",
    description: "This is a detailed description of Sample Product 2.",
    price: 249.99,
    discountedPrice: "199.99",
    category: "Aditya Raj Gupta",
    images: [
      { url: "https://example.com/image2.jpg", altText: "Image 2" }
    ],
    sku: "PROD-002",
    stockQuantity: "30",
  },
    {
    title: "Aditya",
    description: "This is a detailed description of Sample Product 2.",
    price: 249.99,
    discountedPrice: "199.99",
    category: "Aditya Raj Gupta",
    images: [
      { url: "https://example.com/image2.jpg", altText: "Image 2" }
    ],
    sku: "PROD-002",
    stockQuantity: "30",
  },
  {
    title: "Aditya",
    description: "This is a detailed description of Sample Product 2.",
    price: 249.99,
    discountedPrice: "199.99",
    category: "Aditya Raj Gupta",
    images: [
      { url: "https://example.com/image2.jpg", altText: "Image 2" }
    ],
    sku: "PROD-002",
    stockQuantity: "30",
  },  {
    title: "Aditya",
    description: "This is a detailed description of Sample Product 2.",
    price: 249.99,
    discountedPrice: "199.99",
    category: "Aditya Raj Gupta",
    images: [
      { url: "https://example.com/image2.jpg", altText: "Image 2" }
    ],
    sku: "PROD-002",
    stockQuantity: "30",
  },
  {
    title: "Aditya",
    description: "This is a detailed description of Sample Product 2.",
    price: 249.99,
    discountedPrice: "199.99",
    category: "Aditya Raj Gupta",
    images: [
      { url: "https://example.com/image2.jpg", altText: "Image 2" }
    ],
    sku: "PROD-002",
    stockQuantity: "30",
  },
  {
    title: "Aditya",
    description: "This is a detailed description of Sample Product 2.",
    price: 249.99,
    discountedPrice: "199.99",
    category: "Aditya Raj Gupta",
    images: [
      { url: "https://example.com/image2.jpg", altText: "Image 2" }
    ],
    sku: "PROD-002",
    stockQuantity: "30",
  },
  {
    title: "Aditya",
    description: "This is a detailed description of Sample Product 2.",
    price: 249.99,
    discountedPrice: "199.99",
    category: "Aditya Raj Gupta",
    images: [
      { url: "https://example.com/image2.jpg", altText: "Image 2" }
    ],
    sku: "PROD-002",
    stockQuantity: "30",
  },
  {
    title: "Aditya",
    description: "This is a detailed description of Sample Product 2.",
    price: 249.99,
    discountedPrice: "199.99",
    category: "Aditya Raj Gupta",
    images: [
      { url: "https://example.com/image2.jpg", altText: "Image 2" }
    ],
    sku: "PROD-002",
    stockQuantity: "30",
  },
  {
    title: "Aditya",
    description: "This is a detailed description of Sample Product 2.",
    price: 249.99,
    discountedPrice: "199.99",
    category: "Aditya Raj Gupta",
    images: [
      { url: "https://example.com/image2.jpg", altText: "Image 2" }
    ],
    sku: "PROD-002",
    stockQuantity: "30",
  },
  {
    title: "Aditya",
    description: "This is a detailed description of Sample Product 2.",
    price: 249.99,
    discountedPrice: "199.99",
    category: "Aditya Raj Gupta",
    images: [
      { url: "https://example.com/image2.jpg", altText: "Image 2" }
    ],
    sku: "PROD-002",
    stockQuantity: "30",
  },
  {
    title: "Aditya",
    description: "This is a detailed description of Sample Product 2.",
    price: 249.99,
    discountedPrice: "199.99",
    category: "Aditya Raj Gupta",
    images: [
      { url: "https://example.com/image2.jpg", altText: "Image 2" }
    ],
    sku: "PROD-002",
    stockQuantity: "30",
  },
  // Add more products for testing...
];

const productsPerPage = 15;

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      let filteredProducts;

      // Normalize the category from the URL
      const normalizedCategory = category ? category.trim().toLowerCase().replace(/-/g, ' ') : '';
      const normalizedCategoryForComparison = normalizedCategory.replace(/\s+/g, ' ');

      if (normalizedCategory === 'all' || normalizedCategory === '') {
        // Show all products if category is "all"
        filteredProducts = productsData;
      } else {
        // Filter products by selected category
        filteredProducts = productsData.filter(product =>
          product.category.toLowerCase().trim().replace(/\s+/g, ' ') === normalizedCategoryForComparison
        );
      }

      // Set the total number of products found
      setTotalProducts(filteredProducts.length);

      // Calculate products to display based on the current page
      const startIndex = (currentPage - 1) * productsPerPage;
      const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);
      
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
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar Filter */}
      <div className="w-full md:w-1/4 p-4 bg-gray-100">
        <ShopSidebar onCategoryChange={handleCategoryChange} />
      </div>

      {/* Products Grid */}
      <div className="w-full md:w-3/4 p-4">
        {products.length > 0 ? (
          <>
            {/* Product Fetching */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard key={index} title={product.title} price={product.price} image={product.images[0]?.url} />
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 text-white bg-blue-500 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={(currentPage - 1) * productsPerPage + products.length >= totalProducts}
                className={`px-4 py-2 text-white bg-blue-500 rounded ${ (currentPage - 1) * productsPerPage + products.length >= totalProducts ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
