import React, { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Grid, Image, Text, Button, Heading } from '@chakra-ui/react';
import { ShopContext } from '../context/shopContext';

const ProductPage = () => {
  let { handle } = useParams();
  const { fetchProductWithHandle, addItemToCheckout, product } =
    useContext(ShopContext);

  // Fetch the product with the handle right away
  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  //  if (!product.title) return <div>Loading...</div>;

  // Loader: https://cssloaders.github.io/
  if (!product.title) return <span className='loader'></span>;

  return (
    <Box>
      <Grid templateColumns='repeat(2,1fr)'>
        <Image src={product.images[0].src} />
        <Box>
          <Heading>{product.title}</Heading>
          <Text>${product.variants[0].price}</Text>
          <Text>{product.description}</Text>

          {/* Send the particular item (product.variants[0].id) immediately when button is clicked, and send one of them (1), i.e., add 1 to the cart */}
          <Button onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
            Add To Cart
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default ProductPage;
