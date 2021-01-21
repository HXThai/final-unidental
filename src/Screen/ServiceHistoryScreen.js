import React, { useEffect, useState } from 'react';
import {
  FlatList,
  View,
  Text,
  Dimensions,
  Animated,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as d3Shape from 'd3-shape';
import { Data } from './data/HistoryData';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ServiceHistoryScreenStyles';
import Metric from '../Theme/Metric';
import Color from '../Theme/Color';
import Images from '../Theme/Images';
import Modal from 'react-native-modal';

const ItemHistory = ({ image, name, status, amount, price, date,onclick }) => {
  return (
    <View style={styles.itemView}>
      <TouchableOpacity style={styles.itemTouch} onPress={()=>onclick()}>
        <Image source={image} style={[styles.avata,{borderRadius:5}]} />
        <View style={styles.view}>
          <Text numberOfLines={1}>{name}</Text>
          {/* <Text>Số lượng: {amount} con</Text> */}
          {
            status === 4 
            ? <Text style={[styles.text, { color: '#11111199' }]}>Chờ xác nhận</Text>
              : status === 1 ? <Text style={[styles.text, { color: 'green' }]}>Đang xử lý</Text>
                : <Text style={[styles.text, { color: '#11111199' }]}>Đã hoàn thành</Text>
          }
        </View>
        <View style={[styles.view, {alignItems:'flex-end'}]}>
          <Text style={[styles.text, { color: Color.main }]}>{date}</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={[styles.text, { color:'#111' }]}>Tổng tiền: </Text>
            <Text>{styles.dynamicSort(price)}đ</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const ServiceHistory = (props) => {
  useEffect(() => { }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <ItemHistory
            image={item.image}
            name={item.name}
            status={item.status}
            amount={item.amount}
            price={item.price}
            date={item.date}
            onclick={()=>props.navigation.navigate('ServiceDetail',{status:item.status})}
          />
        )}
      // keyExtractor={id}
      />
    </View>
  );
};

export default ServiceHistory;
