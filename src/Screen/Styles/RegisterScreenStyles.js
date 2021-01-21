import {StatusBar, StyleSheet, Dimensions} from 'react-native';
import AppStyles from '../../Theme/AppStyles';
import Color from '../../Theme/Color';
import Metric from '../../Theme/Metric';

export default StyleSheet.create({
  ...AppStyles,
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // flex: 1,
    backgroundColor: Color.background,
    flexDirection: 'column',
  },
  main: {
    marginTop: 30,
    alignItems: 'center',
  },
  textLogin: {
    marginTop: 15,
    alignItems: 'center',
  },
  configTextLogin: {
    fontFamily: 'Nunito',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 25,
    marginBottom: 10,
  },
  phone: {
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderWidth: 1,
    marginTop: 5,
    color: 'grey',
    // opacity: 0.2,
    borderRadius: 20,
    borderColor: 'gray',
  },
  password: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    marginTop: 40,
    width: '90%',
    height: 42,
    backgroundColor: Color.main,
    borderRadius: 20,
    alignItems: 'center',
  },
});
