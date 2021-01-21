import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  AppState,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../Theme/Color';
import Images from '../Theme/Images';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeStyles';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import * as actions from '../Redux/Action/homeAction';

const Home = (props) => {
  // const onClickCategories = (props, index) => {
  //   if(index === 0) {
  //     props.navigation.navigate('')
  //   }
  // }
  const [dataCategories, setDataCategories] = useState([
    {
      image: Images.imgDemoLogo,
      titleTop: 'Dịch vụ',
      titleBot: '',
    },
    {
      image: Images.imgDemoLogo,
      titleTop: 'Tư vấn',
      titleBot: '',
    },
    {
      image: Images.imgDemoLogo,
      titleTop: 'Ưu đãi',
      titleBot: '',
    },
  ]);

  const [dataService, setDataService] = useState([
    {
      image: Images.imgDVNoiBat2,
      title: 'Mặt dán sứ veneer',
      description:
        'Răng sứ veneer là mặt dán sứ bọc dùng để bọc bên ngoài bề mặt răng nhằm che lấp các khuyết điểm khi răng bị tổn thương cấu trúc hoặc xỉn màu, ố vàng và đem đến cho khách hàng một hàm răng đều, đẹp, trắng sáng bền vững theo thời gian.',
      price: 29000,
      priceDiscount: 19000,
    },
    {
      image: Images.imgDVNoiBat1,
      title: 'Tẩy trắng răng',
      description:
        'Được đánh giá là công nghệ tẩy trắng răng hiện đại nhất hiện nay. Với việc sử dụng ánh sáng xanh sẽ kích hoạt phản ứng làm cắt đứt các liên kết màu trong men, ngà răng. Từ đó, đẩy nhanh quá trình làm trắng. Giúp răng trắng hơn mà không thay đổi cấu trúc men, ngà răng, không gây ê buốt. Thời gian thực hiện chỉ khoảng 1 tiếng.',
      price: 59000,
      priceDiscount: 69000,
    },
    {
      image: Images.imgDVNoiBat3,
      title: 'Răng sứ thẩm mỹ',
      description:
        'Răng sứ thẩm mỹ là loại răng được tạo có màu sắc và hình dáng như răng thật. Răng này được dùng để phục hình cho một hoặc nhiều răng hư hoặc bị mất. Răng sứ thẩm mỹ được dùng như cách phục hình răng cho các răng có khuyết điểm. Mục đích làm răng thẩm mỹ để hàm răng đẹp và ăn nhai tốt.',
      price: 29000,
      priceDiscount: 19000,
    },
    {
      image: Images.imgDVNoiBat4,
      title:
        'Cấy ghép Implant là một quy trình đòi hỏi cao về trình độ cũng như kỹ năng tay nghề của bác sĩ. Mặc dù có tỷ lệ thành công cao nhất so với tất cả các loại phục hình khác, quy trình cấy ghép Implant có thành công hay không phụ thuộc rất nhiều vào chất lượng trụ implant đươc cấy ghép, loại xương ghép được chọn, chuyên môn và kinh nghiệm của bác sĩ phẫu thuật nha khoa. Tìm hiểu về quy trình cấy ghép răng Implant sẽ giúp bệnh nhân có cái nhìn tổng quan về cơ chế hoạt động của điều trị này.Đầu tiên Bác sĩ đánh giá tình trạng mất răng qua thăm khám tại chỗ và phim Xquang (tốt nhất là phim CT) để lập một kế hoạch điều trị phù hợp nhất cho bạn.',
      description: '',
      price: 29000,
      priceDiscount: 19000,
    },
    {
      image: Images.imgDVNoiBat5,
      title: 'Niềng răng',
      description:
        'Các bác sĩ chỉnh nha sẽ tiến hành khảo sát, kiểm tra tình trạng răng, lấy dấu răng, chụp X-Quang xương hàm, xương sọ, lấy tất cả dữ liệu và đưa vào phân tích bằng phần mềm trên máy vi tính và dựa vào các dữ liệu đó để lên kế hoạch điều trị',
      price: 29000,
      priceDiscount: 19000,
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
      timeEnd: 'Răng giả tháo lắp',
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

  const [dataSale, setDataSale] = useState([
    {
      image: Images.imgKhuyenMai1,
      title: 'Niềng răng học sinh, sinh viên – Đập tan nỗi lo chi phí !',
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
    },
    {
      image: Images.imgKhuyenMai2,
      title: 'Nha khoa Uni ưu đãi hấp dẫn tới 30-40% với dịch vụ răng sứ.',
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
    },
    {
      image: Images.imgKhuyenMai3,
      title: 'Lấy cao răng ưu đãi mùa tết về.',
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
    },
  ]);

  const [dataNews, setDataNews] = useState([
    {
      image: Images.imgKhuyenMai1,
      title:
        'Từ ngày hôm nay ,nhân dịp tết đến xuân về,hỗ trợ học sinh niềng răng trả góp 0%',
      time: '12h20',
      date: '12/11/2020',
    },
    {
      image: Images.imgKhuyenMai2,
      title: 'Nguyên nhân khiến tỉ lệ sâu răng của nước ta tăng mạnh',
      time: '12h20',
      date: '12/11/2020',
    },
    {
      image: Images.imgKhuyenMai3,
      title: 'Tác dụng của việc lấy cao răng ',
      time: '12h20',
      date: '12/11/2020',
    },
  ]);

  // const Button = ({ image, onclick }) => {
  //   return (
  //     <TouchableOpacity
  //       onPress={() => onclick()}
  //       style={{ paddingLeft: 10, paddingRight: 10 }}
  //     >
  //       <Image source={image} />
  //     </TouchableOpacity>
  //   )
  // };

  // const renderItem = (item, index) => {
  //   return (
  //     <View style={{ alignItems: 'center' }}>
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           // height: 200,
  //           width: '94%',
  //           backgroundColor: 'white',
  //           borderRadius: 5,
  //           marginBottom: 10,
  //           shadowColor: '#000',
  //           shadowOffset: { width: 0, height: 2 },
  //           shadowOpacity: 0.8,
  //           shadowRadius: 0,
  //           elevation: 2,
  //         }}>
  //         <Image
  //           source={item.image}
  //           // resizeMode="contain"
  //           style={{ width: 110, height: 110 }}
  //         />
  //         <View
  //           style={{
  //             flexDirection: 'column',
  //             marginLeft: 5,
  //             justifyContent: 'space-between',
  //           }}>
  //           <View style={{ width: '84%', marginTop: 5 }}>
  //             <Text
  //               style={{
  //                 fontWeight: 'normal',
  //                 fontFamily: 'Roboto',
  //                 fontSize: 13,
  //               }}>
  //               {item.title}
  //             </Text>
  //           </View>
  //           <View
  //             style={{
  //               flexDirection: 'row',
  //               marginTop: 10,
  //               alignItems: 'center',
  //               marginBottom: 10,
  //             }}>
  //             <MaterialIcons name={'watch-later'} size={26} color="#000000" />
  //             <Text
  //               style={{
  //                 fontSize: 11,
  //                 fontFamily: 'Roboto',
  //                 fontWeight: 'normal',
  //                 marginLeft: 5,
  //                 marginRight: 15,
  //               }}>
  //               {item.time} trước
  //             </Text>
  //             <MaterialIcons name={'favorite'} size={26} color={color.main} />
  //             <Text
  //               style={{
  //                 fontSize: 11,
  //                 fontFamily: 'Roboto',
  //                 fontWeight: 'normal',
  //                 marginLeft: 5,
  //                 marginRight: 15,
  //               }}>
  //               {item.like} lượt thích
  //             </Text>
  //           </View>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };

  const [modalVisible, setModalVisible] = useState(false);
  const withScreen = Dimensions.get('window').width;
  const heightScreen = Dimensions.get('window').height;
  useEffect(() => {
    setModalVisible(true);
    AppState.addEventListener('change', (state) => {
      if (state === 'active') {
      } else if (state === 'background') {
      } else if (state === 'inactive') {
      }
    });
  }, []);

  useEffect(() => {
    props.onGetList(null);
  }, []);

  useEffect(() => {
    console.log(props.data);
  }, [props.data]);

  return (
    <View style={styles.container}>
      <View style={styles.contend}>
        <View
          style={[
            styles.contend,
            {
              marginBottom: 60,
            },
          ]}>
          {/*modal popup */}
          <Modal
            style={{alignItems: 'center', justifyContent: 'center'}}
            isVisible={modalVisible}>
            <View
              style={{
                height: '70%',
                width: withScreen,
                backgroundColor: '#fff',
                borderRadius: 10,
                // justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{marginTop: 10, marginBottom: 5}}>
                <View style={{width: '94%', height: 200}}>
                  <Image
                    source={Images.imgKhuyenMai1}
                    style={{
                      width: withScreen * 0.94,
                      height: 200,
                      borderRadius: 10,
                    }}
                  />
                </View>
                <View style={{marginTop: 5, width: '94%'}}>
                  <Text style={{fontSize: 18, color: Colors.main}}>
                    [Thông báo] Khuyến mãi cho hàm răng tươi đẹp!
                  </Text>
                </View>
                <View style={{marginTop: 5, width: '94%'}}>
                  <Text style={{fontSize: 15}}>
                    Hiện tại Uni deltal đang có chương chỉnh niềng đẹp hàm răng
                    tăng độ đẹp trai,xinh gái nhất thế giới với hình thức trả
                    góp.
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <View
                  style={{
                    width: 90,
                    height: 35,
                    backgroundColor: color.main,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25,
                    marginBottom: 20,
                  }}>
                  <Text style={{color: '#fff', fontSize: 13}}>Đóng</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
          <ScrollView>
            {/* slide */}
            <Swiper
              style={{height: 300}}
              loop={false}
              showsButtons={false}
              activeDotColor={color.main}>
              <View
                testID="Hello"
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#9DD6EB',
                  height: 250,
                  width: '100%',
                }}>
                <Image
                  source={Images.banner}
                  // resizeMode="contain"
                  style={{width: '100%', height: 250}}
                />
              </View>
              <View
                testID="Beautiful"
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#9DD6EB',
                  height: 250,
                  width: '100%',
                }}>
                <Image
                  source={Images.banner}
                  // resizeMode="contain"
                  style={{width: '100%', height: 250}}
                />
              </View>
              <View
                testID="Simple"
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#9DD6EB',
                  height: 250,
                  width: '100%',
                }}>
                <Image
                  source={Images.banner}
                  // resizeMode="contain"
                  style={{width: '100%', height: 250}}
                />
              </View>
            </Swiper>
            {/* categries */}
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  alignItems: 'center',
                  marginBottom: 15,

                  flexWrap: 'wrap',
                  flex: 0.95,
                }}>
                {dataCategories.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{
                        flexDirection: 'column',
                        width: '100%',
                        marginBottom: 5,
                        backgroundColor: color.main,
                        borderRadius: 10,
                        shadowColor: '#000',
                        shadowOffset: {width: 0, height: 2},
                        shadowOpacity: 0.8,
                        shadowRadius: 0,
                        elevation: 2,
                      }}>
                      <View style={{width: '100%', flexDirection: 'row'}}>
                        <View
                          style={{
                            width: '30%',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                          }}>
                          <Image
                            source={item.image}
                            style={{width: 100, height: 48, borderRadius: 10}}
                          />
                        </View>
                        <View
                          style={{
                            alignItems: 'center',
                            width: '70%',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 19,
                              fontFamily: 'Nunito',
                              fontWeight: '700',
                              color: 'white',
                            }}>
                            {item.titleTop}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
              {/* khuyến mại */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '94%',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Nunito',
                    fontWeight: '700',
                    color: color.main,
                  }}>
                  Khuyến mại
                </Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('SaleScreen')}>
                  <Text
                    style={{
                      color: color.main,
                      fontSize: 12,
                      fontFamily: 'Nunito',
                      fontWeight: 'normal',
                      fontStyle: 'italic',
                    }}>
                    Xem tất cả
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{width: '100%', alignItems: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '94%',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                  }}>
                  <ScrollView horizontal={true}>
                    {dataSale.map((item, index) => {
                      return (
                        <TouchableOpacity
                          onPress={() =>
                            props.navigation.navigate('SaleDetailScreen')
                          }>
                          <View
                            style={{
                              shadowColor: '#000',
                              shadowOffset: {width: 0, height: 2},
                              shadowOpacity: 0.8,
                              shadowRadius: 0,
                              elevation: 2,
                              width: 343,
                              height: 260,
                              backgroundColor: 'white',
                              marginBottom: 8,
                              marginTop: 15,
                              borderRadius: 10,
                              flexDirection: 'column',
                              marginRight: 15,
                              alignItems: 'center',
                            }}>
                            <Image
                              source={item.image}
                              style={{
                                width: '100%',
                                height: 193,
                                borderRadius: 10,
                              }}
                            />
                            <View
                              style={{
                                width: '96%',
                              }}>
                              <Text
                                numberOfLines={2}
                                style={{
                                  fontSize: 14,
                                  color: 'black',
                                  fontWeight: '600',
                                }}>
                                {item.title}
                              </Text>
                              <Text
                                style={{
                                  fontSize: 12,
                                  color: color.price,
                                  fontStyle: 'italic',
                                }}>
                                Khuyến mãi từ: {item.timeStart} -{' '}
                                {item.timeStart}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
              {/* Dịch vụ */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '94%',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Nunito',
                    fontWeight: '700',
                    color: color.main,
                  }}>
                  Dịch vụ nổi bật
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('ServiceScreen');
                  }}>
                  <Text
                    style={{
                      color: color.main,
                      fontSize: 12,
                      fontFamily: 'Nunito',
                      fontWeight: 'normal',
                      fontStyle: 'italic',
                    }}>
                    Xem tất cả
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{width: '100%', alignItems: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '94%',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                  }}>
                  <ScrollView horizontal={true}>
                    {dataService.map((item, index) => {
                      return (
                        <View
                          style={{
                            shadowColor: '#000',
                            shadowOffset: {width: 0, height: 2},
                            shadowOpacity: 0.8,
                            shadowRadius: 0,
                            elevation: 2,
                            width: 343,
                            height: 280,
                            backgroundColor: 'white',
                            marginBottom: 8,
                            marginTop: 15,
                            borderRadius: 10,
                            flexDirection: 'column',
                            marginRight: 15,
                            alignItems: 'center',
                          }}>
                          <Image
                            source={item.image}
                            style={{
                              width: '100%',
                              height: 193,
                              borderRadius: 10,
                            }}
                          />
                          <View
                            style={{
                              width: '96%',
                              paddingVertical: 2,
                            }}>
                            <Text
                              numberOfLines={2}
                              style={{
                                fontSize: 13,
                                color: color.main,
                              }}>
                              {item.title}
                            </Text>
                          </View>
                          <View
                            style={{
                              width: '96%',
                            }}>
                            <Text
                              numberOfLines={2}
                              style={{fontSize: 12, color: color.price}}>
                              {item.description}
                            </Text>
                            <View
                              style={{
                                flexDirection: 'row',
                                marginTop: 5,
                                justifyContent: 'space-between',
                                width: '100%',
                              }}>
                              {/* <View style={{ flexDirection: 'row' }}>
                                <Text
                                  style={{
                                    fontSize: 12,
                                    color: color.priceDiscount,
                                  }}>
                                  {item.priceDiscount}{' '}
                                </Text>
                                <Text
                                  style={{
                                    fontSize: 12,
                                    color: color.price,
                                    textDecorationLine: 'line-through',
                                  }}>
                                  {item.price}
                                </Text>
                              </View> */}
                              {/* <MaterialIcons
                                name={'add-shopping-cart'}
                                size={23}
                                color={color.price}
                              /> */}
                              <View
                                style={{
                                  width: '96%',
                                  flexDirection: 'row',
                                  justifyContent: 'flex-end',
                                }}>
                                <TouchableOpacity
                                  onPress={() => {
                                    props.navigation.navigate('ServiceDetail');
                                  }}
                                  style={{
                                    borderWidth: 1,
                                    borderColor: color.main,
                                    padding: 3,
                                    borderRadius: 8,
                                  }}>
                                  <Text
                                    style={{fontSize: 11, color: color.main}}>
                                    Đăng ký
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
              {/* Sản phẩm */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '94%',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Nunito',
                    fontWeight: '700',
                    color: color.main,
                  }}>
                  Dịch vụ của chúng tôi
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('ProductScreen');
                  }}>
                  <Text
                    style={{
                      color: color.main,
                      fontSize: 12,
                      fontFamily: 'Nunito',
                      fontWeight: 'normal',
                      fontStyle: 'italic',
                    }}>
                    Xem tất cả
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  margin: 10,
                  width: '98%',
                  marginBottom: 15,
                }}>
                <ScrollView
                  horizontal={false}
                  showsHorizontalScrollIndicator={false}>
                  <View
                    style={{
                      flexWrap: 'wrap',
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                    }}>
                    {dataProduct.map((item, index) => {
                      return (
                        <View
                          style={{
                            elevation: 4,
                            backgroundColor: color.white,
                            borderRadius: 10,
                            // marginRight: 10,
                            marginBottom: 10,
                            width: '45%',
                            flexDirection: 'column',
                            alignItems: 'center',
                            // marginLeft: 1,
                          }}>
                          <Image
                            source={item.image}
                            style={{
                              width: '100%',
                              height: 193,
                              borderRadius: 10,
                            }}
                          />
                          <View style={{width: '95%'}}>
                            <View
                              style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginTop: 5,
                                marginBottom: 5,
                              }}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  width: '100%',
                                }}>
                                <Text
                                  style={[
                                    styles.title,
                                    {
                                      fontSize: 14,
                                      color: color.main,
                                      paddingLeft: 2,
                                      paddingRight: 5,
                                      width: '80%',
                                    },
                                  ]}
                                  numberOfLines={1}>
                                  {item.title}
                                </Text>
                                <MaterialIcons
                                  name={'add-shopping-cart'}
                                  size={20}
                                  color={color.price}
                                />
                              </View>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  marginTop: 5,
                                  marginBottom: 5,
                                  justifyContent: 'space-between',
                                  width: '100%',
                                }}>
                                <View style={{flexDirection: 'row'}}>
                                  <Text
                                    style={{
                                      fontSize: 13,
                                      color: color.priceDiscount,
                                    }}>
                                    {item.priceDiscount}
                                    {'đ '}
                                  </Text>
                                  <Text
                                    style={{
                                      fontSize: 11,
                                      color: color.price,
                                      textDecorationLine: 'line-through',
                                      fontStyle: 'italic',
                                    }}>
                                    {item.price}
                                    {'đ'}
                                  </Text>
                                </View>
                              </View>
                              <View
                                style={{flexDirection: 'row', width: '100%'}}>
                                <Text
                                  style={{
                                    fontSize: 12,
                                    color: '#6A5ACD',
                                    paddingLeft: 2,
                                  }}>
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

              {/* tin tức */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '94%',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Nunito',
                    fontWeight: '700',
                    color: color.main,
                  }}>
                  Tin tức
                </Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('NewsScreen')}>
                  <Text
                    style={{
                      color: color.main,
                      fontSize: 12,
                      fontFamily: 'Nunito',
                      fontWeight: 'normal',
                      fontStyle: 'italic',
                    }}>
                    Xem tất cả
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{width: '100%', alignItems: 'center', marginTop: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '94%',
                    backgroundColor: 'white',
                    borderRadius: 8,
                    paddingTop: 16,
                    justifyContent: 'space-between',
                    marginBottom: 20,
                    shadowColor: '#000',
                    shadowOffset: {width: 9, height: 2},
                    shadowRadius: 0,
                    elevation: 2,
                  }}>
                  <ScrollView horizontal={false}>
                    {dataNews.map((item, index) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            props.navigation.navigate('NewsDetailScreen');
                          }}
                          style={{marginBottom: 16}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              width: '100%',
                              paddingLeft: 10,
                            }}>
                            <View>
                              <Image
                                source={item.image}
                                style={{
                                  width: (withScreen - 32) * (3 / 10),
                                  height:
                                    (withScreen - 32) * (3 / 10) * (3 / 4),
                                  borderRadius: 16,
                                }}
                              />
                            </View>
                            <View
                              style={{
                                justifyContent: 'space-between',
                                paddingRight: 16,
                                width:
                                  withScreen -
                                  (withScreen - 32) * (3 / 10) -
                                  48,
                                paddingLeft: 8,
                              }}>
                              <Text>{item.title}</Text>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                }}>
                                <MaterialIcons
                                  name="history"
                                  size={23}
                                  color="gray"
                                />
                                <Text
                                  style={{fontSize: 12, color: color.price}}>
                                  {item.time} - {item.date}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
            </View>
            <View style={{width: '100%'}}>
              <View
                style={{
                  margin: 10,
                  width: '98%',
                  marginBottom: 15,
                }}>
                <TouchableOpacity
                  style={{
                    paddingLeft: 4,
                    paddingVertical: 3,
                    width: '96%',
                    borderTopRightRadius: 30,
                    borderBottomRightRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    backgroundColor: color.main,
                  }}>
                  <View style={{width: '100%', flexDirection: 'row'}}>
                    <View
                      style={{
                        width: '5%',
                        height: 50,
                        backgroundColor: color.main,
                        borderRightWidth: 2,
                        borderColor: 'white',
                      }}></View>
                    <View style={{width: '80%', paddingLeft: 3, height: 50}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: 'white',
                            marginBottom: 3,
                          }}>
                          Support Online(24/7)
                        </Text>
                      </View>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 22,
                            color: 'white',
                            fontWeight: 'bold',
                          }}>
                          089.686.9009
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: '15%',
                        padding: 5,
                        borderRadius: 999,
                        backgroundColor: 'white',
                        height: 50,
                        shadowColor: '#000',
                        shadowOffset: {width: 9, height: 2},
                        shadowRadius: 0,
                        elevation: 2,
                      }}>
                      <Image
                        source={Images.imgIconCall}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 999,
                        }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.homeReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetList: (params) => {
    dispatch(actions.getCategory(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
