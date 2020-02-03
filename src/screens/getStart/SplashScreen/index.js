import React, { PureComponent } from 'react';
import styles from './styles';
import { Spinner, Container } from 'native-base';
import NavigationServices from '../../../utils/navigationServices';
import SCREENS from '../../../constants/screenNames';
export default class SplashScreen extends PureComponent {
  componentDidMount() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      NavigationServices.resetActionTo(SCREENS.MAIN);
    }, 1000);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Spinner />
      </Container>
    );
  }
}
