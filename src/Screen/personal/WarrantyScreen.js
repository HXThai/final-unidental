import React, {useEffect, useState} from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Images from '../../Theme/Images';
import styles from '../Styles/PersonalScreenStyles';
import Color from '../../Theme/Color';

const WarrantyScreen = (props) => {
  const [data, setdata] = useState([
    {
      type: 'Răng sứ Lava',
      time: '3 năm',
    },
    {
      type: 'Răng sứ Lava',
      time: '3 năm',
    },
    {
      type: 'Răng sứ Lava',
      time: '3 năm',
    },
    {
      type: 'Răng sứ Lava',
      time: '3 năm',
    },
    {
      type: 'Răng sứ Lava',
      time: '3 năm',
    },
    {
      type: 'Răng sứ Lava',
      time: '3 năm',
    },
  ]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, padding: 15}}>
        <View style={styles.viewWarrnty}>
          <Text style={styles.title}>Đối tượng được bảo hành</Text>
          <Text style={styles.text}>
            Tất cả khách hàng thực hiện làm răng sứ thẩm mỹ tại Nha khoa Uni
            Dental đều được cấp thẻ bảo hành chính hãng sau khi kết thúc quy
            trình điều trị. Thẻ bảo hành chỉ thuộc sở hữu của một khách hàng duy
            nhất. Khách hàng có thể liên hệ và đến tư vấn, thực hiện bảo hành ở
            bất kỳ chi nhánh nào của Uni Dental
          </Text>
        </View>
        <View style={styles.viewWarrnty}>
          <Text style={styles.title}>Thời gian bảo hành</Text>
          <Text style={styles.text}>
            Thời gian bảo hành răng sứ tại Uni Dental là thời gian bảo hành của
            Labo cung cấp. Khách hàng được cấp thẻ bảo hành răng sứ chính hãng
            có quy định về thời gian cụ thể. Tùy vào loại răng sứ mà khách hàng
            lựa chọn sẽ có thời gian bảo hành khác nhau.
          </Text>
        </View>
        <View style={styles.viewWarrnty}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.boxWarranty}>
              <Text style={styles.title}>Loại răng</Text>
            </View>
            <View style={styles.boxWarranty}>
              <Text style={styles.title}>Thời gian</Text>
            </View>
          </View>
          {data.map((item, i) => {
            return (
              <View style={{flexDirection: 'row'}}>
                <View style={styles.boxWarranty}>
                  <Text style={styles.text}>{item.type}</Text>
                </View>
                <View style={styles.boxWarranty}>
                  <Text style={styles.text}>{item.time}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default WarrantyScreen;
