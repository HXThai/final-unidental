import {StyleSheet} from 'react-native';
import AppStyles from '../../Theme/AppStyles';

export default StyleSheet.create({
  ...AppStyles,
  input: {
    width: '100%',
    fontSize: 14,
    padding: 0,
    marginLeft: 10,
    color: '#111',
    fontSize: 14,
    fontFamily: 'Nunito'
  },
  viewPass: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomColor: '#11111150',
    borderBottomWidth: 1,
    marginTop: 10,
  },
});
