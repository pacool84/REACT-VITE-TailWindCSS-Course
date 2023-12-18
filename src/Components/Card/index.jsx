import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

const Card = ({
  category: { name },
  images,
  title,
  price,
  description,
  id,
}) => {
  /* context podria ser cualquier nombre */
  const context = useContext(ShoppingCartContext);

  const handleProductDetail = (productInfo) => {
    context.openProductDetail();
    context.setProductToShow(productInfo);
  };

  const addProductToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([
      ...context.cartProducts,
      productData,
    ]); /* Con el spread operator hacemos que mantenga los productos que ya habian sido agregados y aumente un nuevo producto */
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;
    if (isInCart) {
      return (
        <div className=" absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1 ">
          <CheckIcon className="h-6 w-6 text-white " />
        </div>
      );
    } else {
      return (
        <div
          className=" absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 "
          onClick={(event) =>
            addProductToCart(event, {
              images,
              title,
              price,
              description,
              id,
            })
          }
        >
          <PlusIcon className="h-6 w-6 text-black" />
        </div>
      );
    }
  };

  return (
    <div
      className=" bg-white cursor-pointer w-56 h-60 rounded-lg "
      onClick={() =>
        handleProductDetail({
          images,
          title,
          price,
          description,
        })
      }
    >
      <figure className=" relative mb-2 w-full h-4/5 ">
        <span className=" absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 ">
          {name}
        </span>
        <img
          className=" w-full h-full object-cover rounded-lg "
          src={images[0]}
          alt={title}
        />
        {renderIcon(id)}
      </figure>
      <p className=" flex justify-between ">
        <span className=" text-sm font-light">{title}</span>
        <span className=" text-lg font-medium">${price}</span>
      </p>
    </div>
  );
};

export default Card;
