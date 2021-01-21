import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    Animated,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';



// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from '../Styles/ServiceHistoryScreenStyles';
import Color from '../../Theme/Color';
import Images from '../../Theme/Images';
const ItemHistory = ({ image, name, pro, amount, price, date, onclick }) => {
    return (
        <View>
            <TouchableOpacity style={styles.itemTouch} onPress={() => onclick()}>
                <Image source={{ uri: image }} style={styles.avata} />
                <View style={styles.view}>
                    <Text>{name}</Text>
                    <View style={styles.current}>
                        <Text style={[styles.text, { color: '#111' }]}>{price * pro}đ  </Text>
                        <Text style={[styles.text, { color: '#111', textDecorationLine: 'line-through', flex: 1 }]}>{price}đ</Text>
                        <Text style={[styles.text, { color: '#111' }]}>SL: {amount}  </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const NewsDetailScreen = (props) => {
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
                            color:'#000',
                            marginTop:10,
                            marginBottom:10
                            }}>
                            Niềng răng trong suốt không cần mắc cài
                        </Text>
                        <Text style={{
                            color:Color.main,
                            fontSize:13,
                            marginBottom:10
                            }}>
                            12-12-2020
                        </Text>
                        <Text style={{ fontSize: 13 }}>Niềng răng trong suốt không mắc cài Incognito là một bước tiến mới trong ngành nha khoa thẩm mỹ, vừa có khả năng dịch chuyển răng hiệu quả lại vừa đảm bảo được tính thẩm mỹ cao cho người niềng.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default NewsDetailScreen;
