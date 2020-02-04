import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const setValue = (value, byWidth = true) => {
  if (byWidth) {
    return (screenWidth / 360) * value;
  }
  return (screenHeight / 669) * value;
};
