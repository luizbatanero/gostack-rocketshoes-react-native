import React from 'react';
import { Image } from 'react-native';
import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, CartButton, Badge } from './styles';
import logo from '../../assets/images/rocketshoes.png';

const Header = ({ navigation }) => {
  const handleNavigateLogo = () => {
    navigation.pop();
  };

  const handleNavigateCart = () => {
    if (navigation.state.route !== 'Cart') {
      navigation.navigate('Cart');
    }
  };

  return (
    <Container>
      <Logo onPress={handleNavigateLogo}>
        <Image
          source={logo}
          style={{
            width: 235,
            height: 35,
            resizeMode: 'contain',
          }}
        />
      </Logo>
      <CartButton onPress={handleNavigateCart}>
        <Icon name="shopping-cart" size={28} color="#130042" />
        <Badge>99</Badge>
      </CartButton>
    </Container>
  );
};

export default withNavigation(Header);
