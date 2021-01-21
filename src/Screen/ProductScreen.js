import React, { useEffect, useState } from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Images from '../Theme/Images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProductScreenStyles';
import Color from '../Theme/Color';

const ProductScreen = (props) => {
  const [tab, setTab] = useState(0);
  const [dataTab, setDataTab] = useState([
    {
      name: 'Niềng răng',
      img: Images.service3,
      id: 0,
    },
    {
      name: 'Cấy ghép',
      img: Images.service4,
      id: 1,
    },
    {
      name: 'Chỉnh hình',
      img: Images.service3,
      id: 2,
    },
    {
      name: 'Thay răng',
      img: Images.service4,
      id: 3,
    },
    {
      name: 'Tẩy trắng',
      img: Images.service5,
      id: 4,
    },
    {
      name: 'Thẩm mỹ',
      img: Images.service3,
      id: 5,
    },
  ]);
  const [dataProduct, setDataProduct] = useState([
    {
      image: Images.imgDemoSP1,
      title: 'Nha khoa tổng quát',
      price: 29000,
      priceDiscount: 19000,
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
    },
    {
      image: Images.imgDemoSP2,
      title: 'Cấy ghép implant',
      price: 29000,
      priceDiscount: 19000,
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
    },
    {
      image: Images.imgDemoSP3,
      title: 'Răng sứ đen',
      price: 29000,
      priceDiscount: 19000,
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
    },
    {
      image: Images.imgDemoSP4,
      title: 'Tẩy trắng răng',
      price: 29000,
      priceDiscount: 19000,
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
    },
    {
      image: Images.imgDemoSP1,
      title: 'Niềng răng',
      price: 29000,
      priceDiscount: 19000,
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
    },
    {
      image: Images.imgDemoSP2,
      title: 'Nhổ răng sâu',
      price: 29000,
      priceDiscount: 19000,
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
    },
  ]);
  const onClickChangeTab = (value) => {
    setTab(value);
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       props.navigation.navigate('ChooseCityScreen');
  //     }, 3000);
  //   }, []);

  const _showProductDetail = () => {
    props.navigation.navigate('ServiceDetail');
  };

  return (
    <View style={{ flex: 11, backgroundColor: '#E6E6FA' }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            // marginLeft: 5,
            padding: 5,
            alignItems: 'center',
            // backgroundColor: '#fff',
            borderRadius: 4,
            justifyContent: 'space-around'
          }}>
          <ScrollView horizontal={true}>
            {dataTab.map((item) => (
              <View style={{
                borderColor: item.id === tab ? '#0000CD' : '#fff',
                borderRadius: 5,
                // height: 35,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                marginRight: 3
                // backgroundColor: '#FF8C00',
                // borderBottomWidth: item.id === tab ? 1 : 0,
              }}>
                <TouchableOpacity
                  key={item.id}
                  onPress={() => onClickChangeTab(item.id)}
                >
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 5
                    }}>
                    <Image
                      source={item.img}
                      style={{ width: 30, height: 30 }}
                    />
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: '600',
                        color: item.id === tab ? Color.main : '#898989',
                        padding: 10
                        // marginRight: 10,
                        // borderBottomWidth: item.id === tab ? 1 : 0,
                        // borderBottomColor: Color.main,
                        // backgroundColor:'#FF8C00'
                      }}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={{}}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                width: Dimensions.get('window').width - 10,
                alignItems: 'center',
                backgroundColor: '#fff',
                marginTop: 5,
                marginLeft: 5,
                borderRadius: 5,
                // marginTop: 15,
                marginBottom: 70,
                flexWrap: 'wrap',
                // justifyContent: 'space-between',
                flex: 1,
              }}>
              {dataProduct.map((item, index) => {
                return (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '50%',
                      // marginTop: 15,
                    }}>
                    <View
                      style={{
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 0,
                        elevation: 1,
                        width: 164,
                        height: 230,
                        backgroundColor: 'white',
                        marginBottom: 8,
                        marginTop: 15,
                        marginLeft: 8,
                        borderRadius: 10,
                        flexDirection: 'column',
                        marginRight: 10,
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          _showProductDetail();
                        }}>
                        <Image
                          source={item.image}
                          style={{ width: 164, height: 164 }}
                        />
                      </TouchableOpacity>
                      <View
                        style={{
                          width: '90%',
                        }}>
                        <Text style={[
                          styles.title, {
                            fontSize: 14,
                            color: Color.main,
                            paddingLeft: 2,
                            paddingRight: 5,
                            width: '80%'
                          }]}
                          numberOfLines={1}>
                          {item.title}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: 5,
                            justifyContent: 'space-between',
                            width: '100%',
                          }}>
                          <View style={{ flexDirection: 'row' }}>
                            <Text
                              style={{
                                fontSize: 13,
                                color: Color.priceDiscount,
                              }}>
                              {styles.dynamicSort(item.priceDiscount)}{'đ '}
                            </Text>
                            <Text
                              style={{
                                fontSize: 11,
                                color: Color.price,
                                textDecorationLine: 'line-through',
                                fontStyle: 'italic'
                              }}>
                              {styles.dynamicSort(item.price)}{'đ'}
                            </Text>
                          </View>
                          <MaterialIcons
                            name={'add-shopping-cart'}
                            size={23}
                            color={Color.price}
                          />

                        </View>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                          <Text style={{ fontSize: 12, color: '#6A5ACD', paddingLeft: 2 }}>
                            {item.timeStart} - {item.timeEnd}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;
