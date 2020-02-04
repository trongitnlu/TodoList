import React, { PureComponent } from 'react';
import { Container, Content, Button, Text, View } from 'native-base';
import styles from './styles';

export default class MainScreen extends PureComponent {
  onPress = () => {};

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Button style={styles.button} success large>
            <Text style={styles.txtButton}>TODO OFFLINE</Text>
          </Button>
          <Button style={styles.button} primary large>
            <Text style={styles.txtButton}>TODO ONLINE</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
