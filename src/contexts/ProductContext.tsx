
import { FilterProducts, Product } from "../components"
import { useFetchProducts } from "../hooks/useProductsApi"


const ProductContext = ( {sort, categories}:{sort:string, categories:string}) => {
  const {data} = useFetchProducts({sort, categories})

  return (
    <div>
       <div>
        <FilterProducts sort={""} categories={""} />
      </div>
      
      <h1 className="flex gap-x-4 justify-center font-bold text-3xl my-8">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">

          {data?.map(data => {
            return <Product product={data} key={data.id}/>
          
            // <div className="w-full h-[300px] bg-rose-200" key={data.id}>{data.title}</div>
            })}
        </div>
     
    </div>
  )
}

export default ProductContext