import React, { PureComponent } from 'react';
import { Container } from 'native-base';
import RootNavigator from '../routes/RootNavigator';
import NavigationServices from '../utils/navigationServices';

export default class Scenes extends PureComponent {
  render() {
    return (
      <Container>
        <RootNavigator
          ref={navigatorRef => {
            NavigationServices.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Container>
    );
  }
}
