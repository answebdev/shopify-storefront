import React, { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';

const ProductPage = () => {
  let { handle } = useParams();
  const { fetchProductWithHandle, addItemToCheckout, product } =
    useContext(ShopContext);

  // Fetch the product with the handle right away
  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductPage;
