import React, {useEffect} from 'react';
import {ScrollView, Image, Text, View, TouchableOpacity} from 'react-native';
import Images from '../Theme/Images';
import {faChevronRight, faHistory} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import styles from './Styles/PersonalScreenStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Color from '../Theme/Color';

const PersonalScreen = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{padding: 15}}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('PersonalDetail');
          }}
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            borderBottomWidth: 1,
            paddingBottom: 15,
          }}>
          <View style={{marginRight: 10}}>
            <Image
              style={{width: 52, height: 52, borderRadius: 999}}
              source={Images.customer1}
              resizeMode="center"
            />
          </View>
          <View style={{flex: 5}}>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#112868'}}>
              Yang Yo
            </Text>
            <Text style={{fontSize: 14}}>Khách hàng_Vip</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <FontAwesomeIcon icon={faChevronRight} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('WarrantyScreen');
          }}
          style={styles.viewTouch}>
          <View style={styles.image}>
            <Image source={Images.perIcon1} />
          </View>
          <Text style={styles.textTitle}>Bảo hành</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.viewTouch}>
          <View style={styles.image}>
            <Image source={Images.perIcon2} />
          </View>
          <Text style={styles.textTitle}>Phản hồi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('NotificationScreen');
          }}
          style={styles.viewTouch}>
          <View style={styles.image}>
            <Image source={Images.perIcon3} />
          </View>
          <Text style={styles.textTitle}>Thông báo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('ChangePassword');
          }}
          style={styles.viewTouch}>
          <View style={styles.image}>
            <Image source={Images.perIcon4} />
          </View>
          <Text style={styles.textTitle}>Đổi mật khẩu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('RateScreen');
          }}
          style={styles.viewTouch}>
          <View style={styles.image}>
            <Image source={Images.perIcon5} />
          </View>
          <Text style={styles.textTitle}>Đánh giá app</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.viewTouch}>
          <View style={styles.image}>
            <Image source={Images.perIcon6} />
          </View>
          <Text style={styles.textTitle}>Hướng dẫn</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.viewTouch}>
          <View style={styles.image}>
            <Image source={Images.perIcon7} />
          </View>
          <Text style={styles.textTitle}>Thông tin liên hệ</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.viewTouch}>
          <View style={styles.image}>
            <Image source={Images.perIcon8} />
          </View>
          <Text style={styles.textTitle}>Chia sẻ</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => {}} style={styles.viewTouch}>
          <View style={styles.image}>
            <Image source={Images.perIcon9} />
          </View>
          <Text style={styles.textTitle}>Đăng xuất</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

export default PersonalScreen;
