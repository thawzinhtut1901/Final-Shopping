import { createContext, useState, ReactNode, useEffect } from "react";

type CartContextType = /*unresolved*/ any
export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<any[]>([]);
  const [itemAmount, setItemAmount] = useState<any>(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  });

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
  }, [cart])

  const addToCart = (product:any, id:any) => {
    const newItem = {...product, amount: 1}
    const cartItem = cart.find(item => {
      return item.id === id;
    })
    if(cartItem){
      const newCart = [...cart].map(item => {
        if(item.id === id ) {
          return {...item, amount: cartItem.amount +1};
        }else {
          return item;
        }
      });
      setCart(newCart)
    }else {
      setCart([...cart, newItem])
    }
  };
 
  const removeFormCart = (id:any) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    })
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([]);
  }

  const increaseAmount = (id:any) => {
    const CartItem = cart.find((item) => item.id === id);
    addToCart(CartItem, id);
  }

  const decreaseAmount = (id:any) => {
    const CartItem = cart.find((item) => {
      return item.id === id;
    })
    if(CartItem) {
      const newCart = cart.map(item => {
        if(item.id === id) {
          return {...item, amount: CartItem.amount - 1}
        } else {
          return item;
        }
      });
      setCart(newCart);
    } 

    if(CartItem.amount < 2) {
      removeFormCart(id);
    }
  }

  return (
    <CartContext.Provider value={{ itemAmount, decreaseAmount, increaseAmount, clearCart, removeFormCart, addToCart, cart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
