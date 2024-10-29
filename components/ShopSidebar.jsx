import React, { useState } from "react";
import { categories } from '../data/categories' //fetching category data 


const ShopSidebar = ({ onCategoryChange }) => {
    const [activeCategory, setActiveCategory] = useState('all');

    const handleCategoryClick = (slug) => {
        setActiveCategory(slug);
        onCategoryChange(slug);
    };

    return (
        <div className="space-y-2">
            <h2 className="text-2xl font-semibold mb-4 text-black">Categories</h2>
            {categories.map((category) => (
                <button
                    key={category.slug}
                    onClick={() => handleCategoryClick(category.slug)}
                    className={`block w-full text-left px-4 py-2 font-medium rounded transition duration-500 
                        ${activeCategory === category.slug ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white '}`}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default ShopSidebar;
