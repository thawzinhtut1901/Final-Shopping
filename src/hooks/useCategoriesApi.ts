import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api";

const useFetchCategories = () => useQuery({queryKey: ["cat"], queryFn:  fetchCategories});

export default useFetchCategories;