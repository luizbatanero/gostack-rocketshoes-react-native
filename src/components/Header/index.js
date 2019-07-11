import React from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, LogoImage, CartButton, Badge } from './styles';

const Header = ({ navigation }) => {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Logo onPress={() => navigation.pop()}>
        <LogoImage />
      </Logo>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={28} color="#130042" />
        <Badge>{cartSize || 0}</Badge>
      </CartButton>
    </Container>
  );
};

export default Header;
