import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  console.log("Producto con detalles ", context.productToShow);
  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? "flex" : "hidden"}
      checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
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
    </aside>
  );
};

export default CheckoutSideMenu;
