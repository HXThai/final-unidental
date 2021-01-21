import React, { useEffect, useState } from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Images from '../Theme/Images';
import Swiper from 'react-native-swiper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import update from 'immutability-helper';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProductDetailScreenStyles';
import Color from '../Theme/Color';

const CartScreen = (props) => {
  const [dataProduct, setDataProduct] = useState([
    {
      image: Images.imgDemoSP1,
      title: 'Nha khoa tổng quát',
      price: 29000,
      priceDiscount: 19000,
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
      isCheck: false,
    },
    {
      image: Images.imgDemoSP2,
      title: 'Cấy ghép implant',
      price: 29000,
      priceDiscount: 19000,
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
      isCheck: true,
    },
    {
      image: Images.imgDemoSP3,
      title: 'Răng sứ đen',
      price: 29000,
      priceDiscount: 19000,
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
      isCheck: false,
    },
    {
      image: Images.imgDemoSP4,
      title: 'Tẩy trắng răng',
      price: 29000,
      priceDiscount: 19000,
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
      isCheck: false,
    },
    {
      image: Images.imgDemoSP1,
      title: 'Niềng răng',
      price: 29000,
      priceDiscount: 19000,
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
      isCheck: true,
    },
    {
      image: Images.imgDemoSP2,
      title: 'Nhổ răng sâu',
      price: 29000,
      priceDiscount: 19000,
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
      isCheck: false,
    },

  ]);

  const handleSelectProduct = (value) => {
    const newData = update(dataProduct, {
      [value]: {
        $toggle: ['isCheck'],
      },
    });
    setDataProduct([newData]);
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       props.navigation.navigate('ChooseCityScreen');
  //     }, 3000);
  //   }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}>
        <ScrollView>
          <View>
            <View style={{ width: '100%', alignItems: 'center' }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}>
                <ScrollView>
                  {dataProduct.map((item, index) => {
                    return (
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: 10,
                          backgroundColor: '#fff',
                          // marginBottom: 10
                        }}>
                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                          }}>
                          <TouchableOpacity
                            onPress={() => handleSelectProduct(index)}>
                            <MaterialIcons
                              name={
                                item.isCheck
                                  ? 'radio-button-checked'
                                  : 'radio-button-unchecked'
                              }
                              size={20}
                              color={Color.main}
                              style={{ marginLeft: 5 }}
                            />
                          </TouchableOpacity>
                          <View style={{ marginLeft: 5, padding: 10 }}>
                            <Image
                              source={item.image}
                              // resizeMode="contain"
                              style={{ width: 80, height: 80, borderRadius: 8 }}
                            />
                          </View>
                          <View
                            style={{
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              height: 80,
                            }}>
                            <Text style={{ fontSize: 12, color: Color.main }}>{item.title}</Text>
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
                            <View
                              style={{
                                width: 100,
                                height: 24,
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: '#D2D2D2',
                                flexDirection: 'row',
                              }}>
                              <View
                                style={{
                                  width: '33%',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderRightWidth: 1,
                                  borderRightColor: '#D2D2D2',
                                }}>
                                <MaterialIcons
                                  name={'remove'}
                                  size={16}
                                  color={Color.price}
                                />
                              </View>
                              <View
                                style={{
                                  width: '33%',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderRightWidth: 1,
                                  borderRightColor: '#D2D2D2',
                                }}>
                                <Text>{item.numberOfProduct}</Text>
                              </View>
                              <View
                                style={{
                                  width: '33%',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}>
                                <MaterialIcons
                                  name={'add'}
                                  size={16}
                                  color={Color.price}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        {/* <View
                          style={{
                            height: 100,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <MaterialIcons
                            name={'delete-outline'}
                            size={24}
                            color={Color.price}
                          />
                        </View> */}
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            height: 50,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => { }}
            style={{
              width: '35%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 10,
              paddingRight: 45
            }}>
            <MaterialIcons
              name='radio-button-unchecked'
              size={20}
              color={Color.main}
              style={{ marginLeft: 5 }}
            />
            <Text style={{ fontSize: 13 }}>Tất cả</Text>
          </TouchableOpacity>
          <View
            style={{
              width: '45%',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingLeft: 8,
                paddingRight: 8,
              }}>
              <Text style={{ fontSize: 13 }}>Số lượng</Text>
              <Text>3</Text>
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingLeft: 8,
                paddingRight: 8,
              }}>
              <Text style={{ fontSize: 13 }}>Tổng tiền</Text>
              <Text style={{ color: Color.priceDiscount }}>đ 3.000.000</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '100%',
              backgroundColor: Color.main,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <Text style={{ fontSize: 14, color: 'white' }}>Đặt mua</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
