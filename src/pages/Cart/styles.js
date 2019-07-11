import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const EmptyCart = styled.View`
  background: #7159c1;
  flex: 1;
`;

export const EmptyBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
  margin: 20px 0 5px;
`;

export const Message = styled.Text`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.35);
  margin-bottom: 25px;
`;

export const Button = styled(RectButton)`
  background: #fff;
  padding: 8px 12px;
  border-radius: 3px;
`;

export const ButtonText = styled.Text`
  color: #7159c1;
  font-size: 13px;
  font-weight: bold;
  margin-right: 5px;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background: #7159c1;
`;

export const Box = styled.View`
  margin: 20px;
  border-radius: 3px;
  background: #fff;
  padding: 0;
  elevation: 2;
`;
export const Product = styled.View`
  flex-direction: row;
  border-bottom-width: ${props => (props.last ? '0' : '1px')};
  border-bottom-color: #ddd;
  padding: 15px;
`;

export const ProductInfo = styled.View`
  flex-shrink: 1;
  margin: 0 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 13px;
`;

export const ProductPrice = styled.Text`
  font-size: 11px;
  color: #888;
  margin-bottom: 5px;
`;

export const ProductOrderInfo = styled.View`
  flex-shrink: 0;
  align-items: flex-end;
  margin-left: auto;
`;

export const ProductAmountControl = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountButton = styled.TouchableOpacity``;

export const ProductAmount = styled.Text`
  text-align: center;
  width: 36px;
  font-size: 15px;
`;

export const ProductSubtotal = styled.Text`
  margin-top: auto;
  font-size: 15px;
  font-weight: bold;
`;

export const ProductImage = styled.Image`
  width: 70px;
  height: 70px;
`;

export const ProductRemove = styled.TouchableOpacity`
  margin-top: auto;
  margin-left: -4px;
`;
