import { useFetchProducts} from "../hooks/useProductsApi";
import {Hero, Loading } from "../components";
import { ProductContext } from "../contexts";


const Home = ({sort, categories}:{sort:string, categories:string}) => {
  const {isLoading} = useFetchProducts({sort, categories})
  
   
  if (isLoading) {
    return (
        <div className="flex justify-center items-center bg-black w-screen h-screen">
            <Loading/>
        </div>
    )
  }
  

  return (
    
    <div>
      <Hero/>
      <section className="py-16">
          <div>
            <ProductContext sort={""} categories={""}/>
          </div>
          
      </section>
    </div>
  )
}

export default Home