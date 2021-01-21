import {StatusBar} from 'react-native';
import Color from './Color';
function dynamicSort(value) {
  var data = parseFloat(value)
    .toFixed(2)
    .toString()
    .replace(/\d(?=(\d{3})+\.)/g, '$&,')
    .replace('.00', '');
  //console.log(data)
  return data;
}

const AppStyles = {
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: Color.background,
  },
  padding: { paddingLeft: 15, paddingRight: 15 },
  current: {flexDirection:'row',alignItems:'center'},
  dynamicSort: dynamicSort,
};
export default AppStyles;
