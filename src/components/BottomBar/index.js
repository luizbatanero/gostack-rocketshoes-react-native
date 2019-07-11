import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { darken } from 'polished';

import {
  Container,
  EmptyCart,
  EmptyCartMessage,
  Wrapper,
  TotalWrapper,
  TotalLabel,
  TotalValue,
  Button,
  ButtonText,
} from './styles';

export default function BottomBar({
  empty,
  totalValue,
  buttonTitle,
  buttonIcon,
  onPress,
}) {
  if (empty) {
    return (
      <Container>
        <EmptyCart>
          <Icon
            name="remove-shopping-cart"
            color={darken(0.27, '#7159c1')}
            size={36}
          />
          <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
        </EmptyCart>
      </Container>
    );
  }

  return (
    <Container>
      <Wrapper>
        <TotalWrapper>
          <TotalLabel>TOTAL</TotalLabel>
          <TotalValue>{totalValue}</TotalValue>
        </TotalWrapper>
        <Button onPress={onPress}>
          <ButtonText>{buttonTitle}</ButtonText>
          <Icon name={buttonIcon} color="#7159c1" size={18} />
        </Button>
      </Wrapper>
    </Container>
  );
}
