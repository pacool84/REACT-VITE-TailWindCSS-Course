import { createContext, useState, useEffect } from "react";

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

  /* Checkout Side Menu Open/Close */
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true);
  };

  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(false);
  };

  /* Product Detail - Show Product */
  const [productToShow, setProductToShow] = useState({});

  /* Cart Products */
  const [cartProducts, setCartProducts] = useState([]);

  /* Shopping Cart - Order */
  const [order, setOrder] = useState([]);

  /* Consumo de la API */
  const url = "https://api.escuelajs.co/api/v1/products";
  const [items, setItems] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch(url);
      const items = await response.json();

      setItems(items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  /* Search By Title */
  const [searchByTitle, setSearchByTitle] = useState(null);
  console.log("searchByTitle: ", searchByTitle);

  /* Filtrado de items */

  const [filteredItems, setFilteredItems] = useState(null);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  console.log("filteredItems: ", filteredItems);

  /* Filter by Category */
  const [searchByCategory, setSearchByCategory] = useState(null);
  console.log("searchByCategory: ", searchByCategory);

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle)
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    if (searchByCategory)
      setFilteredItems(filteredItemsByCategory(items, searchByCategory));
  }, [items, searchByTitle, searchByCategory]);

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
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
