import React, { useEffect, useState } from 'react';
import {
    FlatList,
    View,
    Text,
    Dimensions,
    Animated,
    Image,
    ScrollView,
} from 'react-native';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from '../Styles/ServiceHistoryScreenStyles';
import Color from '../../Theme/Color';
import Images from '../../Theme/Images';
const SaleDetailScreen = (props) => {
    useEffect(() => { }, []);

    return (
        <View style={styles.container}>
            <View style={{}}>
                <Image
                    source={Images.imgInvisalign}
                    style={{
                        width: '100%',
                        height: 150,
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8
                    }} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                    <View>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            marginTop: 10,
                            // marginBottom: 10
                        }}>
                            Niềng răng trong suốt không cần mắc cài
                        </Text>
                        <Text style={{ fontSize: 13, marginTop: 10 }}>
                            Giá niêm yết: <Text style={{ color: Color.main }}>2.000.000 đ</Text>
                        </Text>
                        <Text style={{ fontSize: 13, marginTop: 10 }}>
                            Giá khuyến mãi:{' '}
                            <Text style={{ color: Color.priceDiscount }}>2.000.000 đ</Text>
                        </Text>
                        <Text style={{marginTop: 10}}>Áp dụng:
                            <Text style={{
                                    color: Color.main,
                                    fontSize: 13
                                }}>
                                    12-12-2020 - 12-12-2020
                            </Text>
                        </Text>
                        <Text style={{ fontSize: 13,marginTop: 10 }}>Niềng răng trong suốt không mắc cài Incognito là một bước tiến mới trong ngành nha khoa thẩm mỹ, vừa có khả năng dịch chuyển răng hiệu quả lại vừa đảm bảo được tính thẩm mỹ cao cho người niềng.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default SaleDetailScreen;
