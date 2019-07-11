import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, LogoImage, CartButton, Badge } from './styles';

const Header = ({ navigation }) => {
  return (
    <Container>
      <Logo onPress={() => navigation.pop()}>
        <LogoImage />
      </Logo>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={28} color="#130042" />
        <Badge>0</Badge>
      </CartButton>
    </Container>
  );
};

export default Header;
