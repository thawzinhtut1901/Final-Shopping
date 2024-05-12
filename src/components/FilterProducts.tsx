import { useState } from "react";
import useFetchCategories from "../hooks/useCategoriesApi";
import { useFetchProducts } from "../hooks/useProductsApi";
import { Product } from "../components";

const FilterProducts = ({ sort, categories }: { sort: string; categories: string }) => {
  const { data: allProducts } = useFetchProducts({ sort, categories });
  const { data: allCategories } = useFetchCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (clickedCategory: string) => {
    setSelectedCategory(clickedCategory === selectedCategory ? null : clickedCategory);
  };

  const filteredProducts = selectedCategory
    ? allProducts?.filter((item) => item.category === selectedCategory)
    : [];

  return (
    <div> 
      <div className="flex gap-x-4 justify-center font-semibold lg:text-lg">
       
        {allCategories?.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? "active border border-slate-800 bg-slate-600 text-slate-200 rounded-md p-2" : " border border-slate-800 bg-slate-500 rounded-md p-2"}
          >
            {category}
          </button>
        ))}
        
      </div>
      {selectedCategory && (<h1 className="flex gap-x-4 justify-center font-bold text-3xl my-8">Category You've Choose</h1>)}
      
      {selectedCategory && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 mb-11">
          {filteredProducts?.map((filteredProduct) => (
            <Product product={filteredProduct} key={filteredProduct.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterProducts;