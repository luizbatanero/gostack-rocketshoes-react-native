import styled from 'styled-components/native';

import logo from '../../assets/images/rocketshoes.png';

export const Container = styled.View`
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px 0 15px;
  background: #fff;
  elevation: 2;
`;

export const Logo = styled.TouchableWithoutFeedback`
  width: 200px;
`;

export const LogoImage = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  width: 200px;
  height: 30px;
`;

export const CartButton = styled.TouchableOpacity`
  transform: translateY(3px);
  position: relative;
`;

export const Badge = styled.Text`
  position: absolute;
  text-align: center;
  font-size: 10px;
  color: #fff;
  background: #7159c1;
  width: 18px;
  height: 18px;
  border-radius: 8px;
  padding-top: 1px;
  right: -6px;
  top: -8px;
`;
