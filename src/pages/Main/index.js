import React, { useEffect, useState } from 'react';
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
  ShimmerImage,
  ShimmerTitle,
  ShimmerPrice,
  ShimmerButton,
} from './styles';

const Main = ({ navigation }) => {
  const products = useSelector(state => state.products);
  const [visible, setVisible] = useState(false);

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

  if (products.length) {
    setTimeout(() => {
      setVisible(true);
    }, 200);
  }

  const handleAddProduct = id => {
    dispatch(CartActions.addToCartRequest(id));
  };

  const renderItems = () => {
    if (!products.length) {
      return (
        <List
          data={[...Array(3).keys()]}
          keyExtractor={index => String(index)}
          renderItem={({ index }) => (
            <Product first={index === 0}>
              <ShimmerImage autoRun visible={visible} />
              <ShimmerTitle autoRun visible={visible} />
              <ShimmerPrice autoRun visible={visible} />
              <ShimmerButton autoRun visible={visible} />
            </Product>
          )}
        />
      );
    }

    return (
      <List
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item, index }) => (
          <Product first={index === 0}>
            <ShimmerImage autoRun visible={visible}>
              <ProductImage source={{ uri: item.image }} />
            </ShimmerImage>
            <ShimmerTitle autoRun visible={visible}>
              <ProductTitle>{item.title}</ProductTitle>
            </ShimmerTitle>
            <ShimmerPrice autoRun visible={visible}>
              <ProductPrice>{formatPrice(item.price)}</ProductPrice>
            </ShimmerPrice>
            <ShimmerButton autoRun visible={visible}>
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
            </ShimmerButton>
          </Product>
        )}
      />
    );
  };

  return (
    <>
      <Container>{renderItems()}</Container>
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
