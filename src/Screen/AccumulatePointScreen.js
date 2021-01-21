import React, { useEffect, useState } from 'react';
import { Image, Text, View, ScrollView,TouchableOpacity } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AccumulatePointScreenStyles';
import Color from '../Theme/Color';
import Images from '../Theme/Images';

const AccumulatePointScreen = (props) => {
  const [dataImg, setDataImg] = useState([
    {
      name: 'Nổi bật',
      img: Images.customer1,
      id: 0,
    },
    {
      name: 'Nhiệt kế điện tử',
      img: Images.customer2,
      id: 1,
    },
    {
      name: 'Máy đo huyết áp',
      img: Images.customer3,
      id: 2,
    },
    {
      name: 'Vitamin',
      img: Images.customer4,
      id: 3,
    },
  ]);
  return (
    <View style={[styles.container, styles.padding]}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingTop: 16,
          justifyContent: 'space-between',
          marginBottom: 20
        }}>
          <ScrollView horizontal={false}>
            {dataImg.map((item,index)=>{
              return (
                <View 
                  style={{
                    marginBottom: 10
                  }}>
                  <TouchableOpacity>
                    <Image 
                      source={item.img}
                      style={{
                        width:'100%',
                        height:200
                    }}
                      />
                  </TouchableOpacity>
                </View>
              )
            })}
          </ScrollView>
        </View>
    </View>
  );
};

export default AccumulatePointScreen;
