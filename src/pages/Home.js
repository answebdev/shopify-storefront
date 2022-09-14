import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  // Fetch all of the products when the Home Page loads
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  // if (!products) return <div>loading...</div>;

  // Loader: https://cssloaders.github.io/
  if (!products) return <span className='loader'></span>;

  return (
    <div>
      {products.map((product) => (
        <Link to={`/products/${product.handle}`} key={product.title}>
          {product.title}
        </Link>
      ))}
    </div>
  );
};

export default Home;
