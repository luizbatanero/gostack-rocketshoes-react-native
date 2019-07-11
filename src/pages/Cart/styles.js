import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #7159c1;
`;

export const Box = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 20px;
  background: ${props => (props.empty ? 'rgba(0, 0, 0, 0.1)' : '#fff')};
  border-radius: 3px;
  padding: ${props => (props.empty ? '20px' : '10px')};
  elevation: ${props => (props.empty ? 0 : 2)};
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
