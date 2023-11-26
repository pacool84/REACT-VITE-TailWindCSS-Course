import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${context.isProductDetailOpen ? "flex" : "hidden"}
      product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center ">
        <h2 className="font-medium text-xl p-6">Detail</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black"
            onClick={() => {
              context.closeProductDetail();
            }}
          />
        </div>
      </div>
    </aside>
  );
};

export default ProductDetail;
