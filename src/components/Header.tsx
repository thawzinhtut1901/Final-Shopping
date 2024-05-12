
import { useContext, useEffect, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import SideBar from './SideBar';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../../public/img//logo.svg'

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const {itemAmount} = useContext(CartContext);

  

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  })

  const toggleSidebar = () => {
    setShowSideBar(!showSideBar);
  }
 
  return (
    <section className={`${isActive ? 'bg-gray-400 py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='container flex items-center justify-between h-full mx-auto'>
        <Link to={'/'}>
        <div>
          <img className='w-[40px] bg-cyan-200' src={Logo} alt="" />
        </div>
      </Link>

        <div className='cursor-pointer flex relative' onClick={toggleSidebar}>
          <BsBag className='text-3xl text-black' />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
        </div>
          
        
      </div>
      {showSideBar && (
            <SideBar isOpen={showSideBar}  onClose={() => setShowSideBar(false)}/>
          )}
     
   
    </section>
    
    
  );
};

export default Header;

