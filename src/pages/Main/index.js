import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ActivityIndicator } from 'react-native';
import { darken } from 'polished';

import { formatPrice } from '../../util/format';

import { fetchProductsRequest } from '../../store/modules/products/actions';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  List,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
  BottomBar,
  EmptyCart,
  EmptyCartMessage,
  GoToCart,
  GoToCartButton,
  GoToCartButtonText,
  TotalWrapper,
  TotalLabel,
  TotalValue,
} from './styles';

const Main = ({ navigation }) => {
  const loading = useSelector(state => state.products.isFetching);
  const products = useSelector(state => state.products.products);

  const amount = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {})
  );
  const cartSize = useSelector(state => state.cart.length);
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, []);

  const handleAddProduct = id => {
    dispatch(CartActions.addToCartRequest(id));
  };

  if (loading) {
    return (
      <Container loading>
        <ActivityIndicator color="#fff" size="large" />
      </Container>
    );
  }

  return (
    <>
      <Container>
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item, index }) => (
            <Product first={index === 0}>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{formatPrice(item.price)}</ProductPrice>
              <AddButton
                onPress={() => !item.loading && handleAddProduct(item.id)}
              >
                <ProductAmount loading={item.loading}>
                  {item.loading ? (
                    <ActivityIndicator color="#FFF" size={20} />
                  ) : (
                    <>
                      <Icon name="add-shopping-cart" color="#FFF" size={20} />
                      <ProductAmountText>
                        {amount[item.id] || 0}
                      </ProductAmountText>
                    </>
                  )}
                </ProductAmount>
                <AddButtonText>ADD TO CART</AddButtonText>
              </AddButton>
            </Product>
          )}
        />
      </Container>
      <BottomBar>
        {cartSize > 0 ? (
          <GoToCart>
            <TotalWrapper>
              <TotalLabel>TOTAL</TotalLabel>
              <TotalValue>{total}</TotalValue>
            </TotalWrapper>
            <GoToCartButton onPress={() => navigation.navigate('Cart')}>
              <GoToCartButtonText>GO TO CART</GoToCartButtonText>
              <Icon name="keyboard-arrow-right" color="#7159c1" size={18} />
            </GoToCartButton>
          </GoToCart>
        ) : (
          <EmptyCart>
            <Icon
              name="remove-shopping-cart"
              color={darken(0.27, '#7159c1')}
              size={36}
            />
            <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
          </EmptyCart>
        )}
      </BottomBar>
    </>
  );
};

export default Main;
