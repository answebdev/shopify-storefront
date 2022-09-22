import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { Box, Grid, Text, Image } from '@chakra-ui/react';
import Hero from '../components/Hero';
import ImageWithText from '../components/ImageWithText';

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  // Fetch all of the products when the Home Page loads
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  // console.log(products);

  // if (!products) return <div>loading...</div>;

  // Loader: https://cssloaders.github.io/
  if (!products) return <span className='loader'></span>;

  return (
    <Box>
      <Hero />
      <Grid templateColumns='repeat(3, 1fr)'>
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box _hover={{ opacity: '80%' }} textAlign='center'>
              <Image src={product.images[0].src} />
              <Text>{product.title}</Text>
              <Text>${product.variants[0].price}</Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <ImageWithText
        button
        image='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758'
        heading='First Heading'
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee."
      />
      <ImageWithText
        reverse
        button
        image='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758'
        heading='Second Heading'
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee."
      />
    </Box>
  );
};

export default Home;
