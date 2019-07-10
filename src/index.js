import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';

import './config/ReactotronConfig';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <Icon name="shopping-cart" size={80} color="#999" />
    </Container>
  );
};

export default App;
