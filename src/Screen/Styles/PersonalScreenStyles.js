import {StyleSheet} from 'react-native';
import AppStyles from '../../Theme/AppStyles';

export default StyleSheet.create({
  ...AppStyles,
  viewTouch: {flexDirection: 'row', margin: 10, alignItems: 'center'},
  textTitle: {
    fontSize: 14,
    marginLeft: 10,
    fontWeight: '300',
    fontFamily: 'Nunito',
  },
  image: {
    width: 25,
    alignItems: 'flex-start',
  },
  viewWarrnty: {
    marginBottom: 10,
  },
  boxWarranty:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    padding: 10,
    borderColor: '#11111150',
    borderWidth: 0.5
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Nunito',
    marginBottom:5
  },
  text: {
    fontSize: 14,
    fontFamily: 'Nunito',
  }
});
