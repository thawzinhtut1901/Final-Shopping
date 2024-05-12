
import hero from '../../public/img/bg_hero.svg'



const Hero = () => {
  return (
    <section
      className="bg-gray-300 h-[500px] bg-no-repeat bg-center bg-cover py-24  text-cyan-300 " style={{backgroundImage: `url(${hero})`}}>
        
      <div className="container mx-auto flex justify-around h-full">
        
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-slate-300 mr-3"></div>New Trend
            <h1 className="text-[70px] leading-[1.1] font-light my-5 font-serif text-yellow-500">AUTUMN STYLISH <br /> <span className="text-slate-300 font-semibold font-mono mt-5">MEN</span></h1>
          

          
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
