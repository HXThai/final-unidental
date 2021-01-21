import {StyleSheet} from 'react-native';
import AppStyles from '../../Theme/AppStyles';
import Color from '../../Theme/Color';

export default StyleSheet.create({
  ...AppStyles,
  title: {padding: 10, textAlign: 'center'},
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#11111150',
    borderWidth: 1,
    marginTop: 10,
    textAlignVertical: 'top',
  },
});
