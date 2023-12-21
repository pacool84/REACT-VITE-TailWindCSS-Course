import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../Components/Layout";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      My Order
      <div className="px-6 overflow-y-scroll flex-1 ">
        {context.order?.slice(-1)[0].products.map(
          (
            product //Aqui solo queremos renderizar la ultima porcion de la orden
          ) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          )
        )}
      </div>
    </Layout>
  );
}

export default MyOrder;
