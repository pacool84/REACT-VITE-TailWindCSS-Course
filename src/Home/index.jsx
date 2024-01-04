import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import Layout from "../Components/Layout";
import Card from "../Components/Card";
import ProductDetail from "../Components/ProductDetail";

function Home() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exlusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search Product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className=" grid gap-4  grid-cols-4 w-full max-w-screen-lg ">
        {context.items?.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
