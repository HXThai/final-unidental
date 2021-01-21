import { StyleSheet } from 'react-native';
import AppStyles from "../../Theme/AppStyles"

function dynamicSort(value) {
  var data = parseFloat(value).toFixed(2).toString().replace(/\d(?=(\d{3})+\.)/g, '$&,').replace(".00", " ");
  //console.log(data)
  return data;
}

export default StyleSheet.create({
  ...AppStyles,
  dynamicSort: dynamicSort,
  padding:{paddingLeft:15,paddingRight:15},
  text: {
    fontSize: 13
  },
  itemView: {
    borderBottomWidth: 1, borderBottomColor: '#dedede',
    marginLeft: 15, marginRight: 15,
    borderColor: '#dedede'
  },
  itemTouch: {
    height: 60, flexDirection: 'row',
    marginBottom: 15, marginTop: 15,
  },
  avata: { width: 60, height: 60 },
  view: { marginLeft: 10, flex: 1 },
  bottom: { borderBottomWidth: 1, borderBottomColor: '#11111199', paddingBottom: 20, marginTop:10 },
  
});
