import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  /* console.log("Producto con detalles ", context.productToShow); */
  return (
    <aside
      className={`${context.isProductDetailOpen ? "flex" : "hidden"}
      product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center ">
        <h2 className="font-medium text-xl p-6">Detail</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => {
              context.closeProductDetail();
            }}
          />
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={
            context.productToShow.images ? context.productToShow.images[0] : ""
          }
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-md">
          {context.productToShow.title}
        </span>
        <span className="font-ligth text-sm">
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
