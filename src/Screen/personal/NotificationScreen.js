import React, {useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import styles from '../Styles/NotiStyle';

const NotificationScreen = (props) => {
  const [data, setdata] = useState([
    {
      title: 'Thông báo hẹn tái khám',
      time: '20-03-2020 19:05',
      content:
        'Kính chào quý khách Thời gian qua cảm ơn quý khách đã tin tưởng và sử dung dịch vụ của Uni Dental và gắn bó với đội ngũ nhân viên. Chúng tôi rất mong muốn có 1 buổi tái khám của quý khách để kiểm tra quá trình phục hồi của dịch vụ răng sứ',
    },
    {
      title: 'Thông báo hẹn tái khám',
      time: '20-03-2020 19:05',
      content:
        'Kính chào quý khách Thời gian qua cảm ơn quý khách đã tin tưởng và sử dung dịch vụ của Uni Dental và gắn bó với đội ngũ nhân viên. Chúng tôi rất mong muốn có 1 buổi tái khám của quý khách để kiểm tra quá trình phục hồi của dịch vụ răng sứ',
    },
    {
      title: 'Thông báo hẹn tái khám',
      time: '20-03-2020 19:05',
      content:
        'Kính chào quý khách Thời gian qua cảm ơn quý khách đã tin tưởng và sử dung dịch vụ của Uni Dental và gắn bó với đội ngũ nhân viên. Chúng tôi rất mong muốn có 1 buổi tái khám của quý khách để kiểm tra quá trình phục hồi của dịch vụ răng sứ',
    },
    {
      title: 'Thông báo hẹn tái khám',
      time: '20-03-2020 19:05',
      content:
        'Kính chào quý khách Thời gian qua cảm ơn quý khách đã tin tưởng và sử dung dịch vụ của Uni Dental và gắn bó với đội ngũ nhân viên. Chúng tôi rất mong muốn có 1 buổi tái khám của quý khách để kiểm tra quá trình phục hồi của dịch vụ răng sứ',
    },
  ]);
  return (
    <View style={{flex: 1, padding: 15}}>
      {data.map((item, i) => {
        return (
          <TouchableOpacity onPress={()=>{}}
            style={{
              borderBottomColor: '#11111150',
              borderBottomWidth: 1,
              paddingBottom: 10,
              marginTop: 10,
            }}>
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.text} numberOfLines={2}>{item.content}</Text>
            <Text style={[styles.text, {fontWeight: '700'}]} numberOfLines={1}>{item.time}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NotificationScreen;
