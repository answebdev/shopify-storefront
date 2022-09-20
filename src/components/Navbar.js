import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Icon, Image, Badge } from '@chakra-ui/react';
import { MdMenu, MdShoppingBasket } from 'react-icons/md';
import { ShopContext } from '../context/shopContext';
import logo from '../img/Logologo_1.svg';

const Navbar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      backgroundColor='#ffa8e2'
      flexDir='row'
      justifyContent='space-between'
      alignItems='center'
      p='2rem' // Padding
    >
      <Icon
        fill='white'
        cursor='pointer'
        as={MdMenu}
        w={30}
        h={30}
        onClick={() => openMenu()}
      ></Icon>
      <Link to='/'>
        <Image src={logo} w={100} h={100} />
      </Link>
      <Box>
        <Icon
          onClick={() => openCart()}
          fill='white'
          cursor='pointer'
          as={MdShoppingBasket}
          w={30}
          h={30}
        />
        <Badge backgroundColor='#FF38BD' borderRadius='50%'>
          {checkout?.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  );
};

export default Navbar;
