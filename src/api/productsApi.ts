import { URL } from "../service/ApiEndPoint";
import { ProductDataType } from "../type";

export const fetchProducts = async ({
  sort,
  categories
}: {
  sort: string;
  categories:string;
}) => {
  const filterSort = sort ? `sort=${sort}` : "";
  const filterCategory = categories ? `Category/${categories}` : "";
  
  const response: Response = await fetch(
    `${URL}/products?${filterCategory}?${
      filterSort && `&${filterSort}`
    }`
  );
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result as any[];
};

export const createNewProduct = async ({
  data,
}: {
  data: {
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
  };
}) => {
  const response: Response = await fetch(`${URL}/products`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result as ProductDataType;
};