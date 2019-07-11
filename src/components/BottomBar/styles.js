import styled from 'styled-components/native';
import { darken } from 'polished';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
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

export const Wrapper = styled.View`
  padding: 20px;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled(RectButton)`
  background: #fff;
  padding: 8px 10px 8px 12px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled.Text`
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
