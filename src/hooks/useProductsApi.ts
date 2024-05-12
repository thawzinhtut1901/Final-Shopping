import { useMutation, useQuery } from "@tanstack/react-query";
import { ProductDataType } from "../type";
import { useNavigate } from "react-router-dom";
import { createNewProduct, fetchProducts } from "../api/productsApi";

export const useFetchProducts = ({
  sort,
  categories,
}: {
  sort: string;
  categories: string;
}) =>
  useQuery({
    queryKey: ["products", sort, categories],
    queryFn: () => fetchProducts({ sort, categories}),
  });

export const useCreateProduct = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: ProductDataType) => createNewProduct({ data }),
    onSuccess: () => navigate("/"),
  });
};