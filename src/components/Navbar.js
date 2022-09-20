import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Flex, Icon, Image } from '@chakra-ui/react';
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
      <Icon
        onClick={() => openCart()}
        fill='white'
        cursor='pointer'
        as={MdShoppingBasket}
        w={30}
        h={30}
      ></Icon>
    </Flex>
  );
};

export default Navbar;
