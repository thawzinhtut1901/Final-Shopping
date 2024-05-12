import { useContext } from "react";
import { useParams } from "react-router-dom"
import { CartContext } from "../contexts/CartContext";
import { useFetchProducts } from "../hooks/useProductsApi";

const ProductDetails = ( {sort, categories}:{sort:string, categories:string}) => {
  const {id} = useParams<{ id: any }>();
  const {data} = useFetchProducts({sort, categories})
  const { addToCart } = useContext(CartContext);

  const products = data?.find((item) => {
    return item.id === parseInt(id)
  });

  console.log(products)

  if (!products || !data) {
    return <section className="h-screen flex justify-center items-center">Loading...</section>;
  }

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen">
      {/* className={`${isActive ? ' py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`} */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px]" src={products.image} alt="" />
          </div>
          <div className="flex-1 text-center text-slate-800 lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto">{products.title}</h1>
            <div className="text-xl text-slate-600 font-medium mb-6 max-w-[450px] mx-auto">$ {products.price}</div>
            <p className="mb-8  max-w-[450px] mx-auto">{products.description}</p>
            <button onClick={() => addToCart(products, products.id)} className="bg-slate-900 py-4 px-8 text-white rounded-md mx-[200px]">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
