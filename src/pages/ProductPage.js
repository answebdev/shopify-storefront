import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Grid,
  Flex,
  Image,
  Text,
  Button,
  Heading,
} from '@chakra-ui/react';
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
    <Box p='2rem'>
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} m='auto'>
        <Flex justifyContent='center' alignItems='center'>
          <Image src={product.images[0].src} />
        </Flex>
        <Flex
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          px='2rem'
        >
          <Heading pb='2rem'>{product.title}</Heading>
          <Text fontWeight='bold' pb='2rem'>
            ${product.variants[0].price}
          </Text>
          <Text pb='2rem' color='gray.500'>
            {product.description}
          </Text>

          {/* Send the particular item (product.variants[0].id) immediately when button is clicked, and send one of them (1), i.e., add 1 to the cart */}
          <Button
            onClick={() => addItemToCheckout(product.variants[0].id, 1)}
            _hover={{ opacity: '70%' }}
            w='10rem'
            backgroundColor='#ff38bd'
            color='#ffffff'
          >
            Add To Cart
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default ProductPage;
