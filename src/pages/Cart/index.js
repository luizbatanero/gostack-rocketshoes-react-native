import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { rgba } from 'polished';

import { formatPrice } from '../../util/format';
import { Container, Box, Title, Message, Button, ButtonText } from './styles';

const Cart = ({ navigation }) => {
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce(
        (total, product) => total + product.price * product.amount,
        0
      )
    )
  );

  if (products.length) {
    return (
      <Container>
        <Box>
          <Title>TODO: CART</Title>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box empty>
        <Icon
          name="remove-shopping-cart"
          color={rgba(0, 0, 0, 0.1)}
          size={128}
        />
        <Title>SHOPPING CART IS EMPTY</Title>
        <Message>You have no products in your shopping cart.</Message>
        <Button onPress={() => navigation.pop()}>
          <ButtonText>CONTINUE SHOPPING</ButtonText>
        </Button>
      </Box>
    </Container>
  );
};

export default Cart;
