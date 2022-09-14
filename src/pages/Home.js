import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  // Fetch all of the products when the Home Page loads
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <div>
      {products.map((product) => (
        <h1 key={product.title}>{product.title}</h1>
      ))}
    </div>
  );
};

export default Home;
