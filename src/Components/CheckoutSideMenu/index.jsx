import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  console.log("Producto con detalles ", context.productToShow);
  console.log("CART: ", context.cartProducts);
  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? "flex" : "hidden"}
      checkout-side-menu scrollable-cards flex-col fixed right-0 border border-black rounded-lg bg-white `}
    >
      <div className="flex justify-between items-center p-6 ">
        {/* Corregir el p-6 en el component ProductDetail */}
        <h2 className="font-medium text-xl ">My Order</h2>{" "}
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => {
              context.closeCheckoutSideMenu();
            }}
          />
        </div>
      </div>
      <div className="p-6">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
