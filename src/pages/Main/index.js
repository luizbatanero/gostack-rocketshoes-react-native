import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

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
} from './styles';

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <List
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item, index }) => (
          <Product first={index === 0}>
            <ProductImage source={{ uri: item.image }} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{formatPrice(item.price)}</ProductPrice>
            <AddButton onPress={() => this.handleAddProduct(item.id)}>
              <ProductAmount>
                <Icon name="add-shopping-cart" color="#FFF" size={20} />
                <ProductAmountText>{0}</ProductAmountText>
              </ProductAmount>
              <AddButtonText>ADD TO CART</AddButtonText>
            </AddButton>
          </Product>
        )}
      />
    </Container>
  );
};

export default Main;
