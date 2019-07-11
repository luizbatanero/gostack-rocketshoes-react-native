import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: #7159c1;
`;

export const List = styled.FlatList``;

export const Product = styled.View`
  background: #fff;
  margin: 0 20px 20px;
  margin-top: ${props => (props.first ? '20px' : '0')};
  border-radius: 3px;
  elevation: 2;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
  align-self: center;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  margin: 0 8px;
`;

export const ProductPrice = styled.Text`
  margin: 5px 10px;
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, '#7159c1')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 6px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
