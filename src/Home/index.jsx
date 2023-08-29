import { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Card from "../Components/Card";

const url = "https://api.escuelajs.co/api/v1/products";

function Home() {
  const [items, setItems] = useState(null);
  /* Consumo de la API */

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

  return (
    <Layout>
      Home
      <div className=" grid gap-3  grid-cols-4 w-full max-w-screen-lg ">
        {items?.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </Layout>
  );
}

export default Home;
