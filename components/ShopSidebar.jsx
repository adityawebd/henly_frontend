const categories = [
    { name: 'All Products', slug: 'all' },
    { name: 'Supernatural Protein', slug: 'supernatural-protein' },
    { name: 'Super Oats', slug: 'super-oats' },
    { name: 'High Protein Peanut Butter', slug: 'high-protein-peanut-butter' },
    { name: 'Combos', slug: 'combos' },
    { name: 'Super Muesli', slug: 'super-muesli' },
    { name: 'Peanut Butter', slug: 'peanut-butter' },
    { name: 'Aditya Raj Gupta', slug: 'aditya-raj-gupta' },
];


const ShopSidebar = ({ onCategoryChange }) => {
    return (
        <div className="space-y-2">
            <h2 className="text-lg font-semibold mb-4">Filter</h2>
            {categories.map((category) => (
                <button
                    key={category.slug}
                    onClick={() => onCategoryChange(category.slug)}
                    className="block w-full text-left px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default ShopSidebar;
