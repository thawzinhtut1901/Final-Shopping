import { URL } from "../service/ApiEndPoint"

const fetchCategories = async () => {

    const response:Response = await fetch(`${URL}/products/categories`);
    const result = await response.json();
    if (!response.ok) {
        throw new Error();
    }
    return result as any[];
};

export default fetchCategories;