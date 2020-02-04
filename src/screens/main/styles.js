import { StyleSheet } from 'react-native';
import { COLOR_BACKDROP } from '../../constants/colors';
import {
  DEFAUT_PADDING_HORIZONTAL,
  DEFAUT_PADDING_VERTICAL,
  FONT_SIZE,
} from '../../constants/sizes';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKDROP,
    paddingHorizontal: DEFAUT_PADDING_HORIZONTAL,
    paddingVertical: DEFAUT_PADDING_VERTICAL,
  },
  txtButton: {
    fontSize: FONT_SIZE.LARGE,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    color: 'white',
  },
  button: {
    marginBottom: DEFAUT_PADDING_VERTICAL,
  },
});
