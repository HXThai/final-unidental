import React, { useEffect, useState } from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Images from '../../Theme/Images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//styles
import color from '../../Theme/Color';

const NewsScreen = (props) => {
    const [dataNews, setDataNews] = useState([
        {
            image: Images.imgKhuyenMai1,
            title: 'Từ ngày hôm nay ,nhân dịp tết đến xuân về,hỗ trợ học sinh niềng răng trả góp 0%',
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
    const _showNewsDetail = () => {
        props.navigation.navigate('NewsDetailScreen');
    };
    const withScreen = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* <View
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
                            borderColor: item.id === tab ? '#FF8C00' : '#fff',
                            borderRadius: 5,
                            height: 35,
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
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View> */}
            <View style={{ backgroundColor: '#fff' }}>
                <View style={{ width: '100%', alignItems: 'center', marginTop: 10 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            paddingTop: 16,
                            justifyContent: 'space-between',
                            marginBottom: 20
                        }}>
                        <ScrollView horizontal={false}>
                            {dataNews.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        style={{
                                            marginBottom: 16,
                                            borderBottomWidth: 1,
                                            borderBottomLeftRadius: 40,
                                            borderBottomRightRadius: 40,
                                            borderColor: '#dedede',
                                            // paddingTop: 8,
                                            paddingBottom: 8
                                        }}
                                        onPress={() => { _showNewsDetail(); }}>
                                        <View style={{ flexDirection: 'row', width: '100%', paddingLeft: 10 }}>
                                            <View>
                                                <Image source={item.image}
                                                    style={{ width: (withScreen - 32) * (3 / 10), height: (((withScreen - 32) * (3 / 10) * (3 / 4))), borderRadius: 16 }} />
                                            </View>
                                            <View style={{ justifyContent: 'space-between', paddingRight: 16, width: (withScreen - 10) * 3 / 4, paddingLeft: 8 }}>
                                                <Text numberOfLines={3} style={{ color: color.main, fontSize: 14 }}>{item.title}</Text>
                                                {/* <Text numberOfLines={2} style={{ fontSize: 14 }}>{item.description}</Text> */}
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <MaterialIcons name='history' size={23} color='gray' />
                                                    <Text style={{ fontSize: 12, color: color.price }}>
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
        </View>
    )
}
export default NewsScreen;