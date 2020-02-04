import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { Item, Input } from 'native-base';

export default class TodoListOffLineScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Item>
          <Input placeholder="Textbox with Error Input" />
        </Item>
      </View>
    );
  }
}
