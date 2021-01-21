import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';

import styles from '../Styles/RateStyle';

const RateScreen = (props) => {
  const [rate, setRate] = useState('');
  return (
    <View style={[styles.container, styles.padding]}>
      <Text style={styles.title}>Đánh giá dịch vụ đang sử dụng</Text>
      <View style={[styles.current, {justifyContent: 'space-around'}]}>
        <View style={{flex: 1}}>
          <AirbnbRating count={5} reviews={[]} defaultRating={5} size={16} />
          <Text style={styles.text}>Cửa hàng</Text>
        </View>
        <View style={{flex: 1}}>
          <AirbnbRating count={5} reviews={[]} defaultRating={5} size={16} />
          <Text style={styles.text}>Nhân viên</Text>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Viết đánh giá"
        onChangeText={(text) => setRate(text)}
        value={rate}
        multiline={true}
        numberOfLines={5}
      />
    </View>
  );
};

export default RateScreen;
