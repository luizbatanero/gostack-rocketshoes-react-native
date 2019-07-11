import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Shimmer from 'react-native-shimmer-placeholder';

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
  padding: 15px 10px 10px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
  align-self: center;
`;

export const ShimmerImage = styled(Shimmer)`
  height: 197px;
  width: 197px;
  align-self: center;
  border-radius: 100px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  margin: 0 8px;
`;

export const ShimmerTitle = styled(Shimmer)`
  margin: 5px 0;
  height: 20px;
  width: 85%;
  border-radius: 2px;
`;

export const ProductPrice = styled.Text`
  margin: 0 10px 15px;
  font-size: 22px;
  font-weight: bold;
`;

export const ShimmerPrice = styled(Shimmer)`
  width: 120px;
  height: 28px;
  margin: 0 0 10px;
  border-radius: 2px;
`;

export const AddButton = styled(RectButton)`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  height: 45px;
`;

export const ShimmerButton = styled(Shimmer)`
  width: 100%;
  height: 45px;
  border-radius: 4px;
`;

export const ProductAmount = styled.View`
  background: ${props =>
    props.loading ? darken(0.06, '#7159c1') : darken(0.03, '#7159c1')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 75px;
  align-self: stretch;
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

export const BottomBar = styled.View`
  height: 70px;
  background: ${darken(0.2, '#7159c1')};
  border-top-color: rgba(0, 0, 0, 0.05);
  border-top-width: 2px;
`;

export const EmptyCart = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const EmptyCartMessage = styled.Text`
  margin-left: 10px;
  font-size: 15px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.25);
  font-weight: bold;
`;

export const GoToCart = styled.View`
  padding: 20px;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const GoToCartButton = styled(RectButton)`
  background: #fff;
  padding: 8px 10px 8px 12px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const GoToCartButtonText = styled.Text`
  color: #7159c1;
  font-size: 13px;
  font-weight: bold;
  margin-right: 5px;
`;

export const TotalWrapper = styled.View``;

export const TotalLabel = styled.Text`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;
export const TotalValue = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
