import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  /* Shopping Cart - Increment quantity */
  const [count, setCount] = useState(0);

  /* Product Detail - Open/Close */
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };

  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  /* Product Detail - Show Product */
  const [productToShow, setProductToShow] = useState({});

  /* Cart Products */
  const [cartProduct, setCardProducts] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProduct,
        setCardProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
