import React, {useEffect} from 'react';
import {Image, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Images from '../../Theme/Images';
import Color from '../../Theme/Color';
import styles from '../Styles/ChangepassStyle';

const ChangePassword = () => {
  return (
    <View style={{flex: 1, padding: 15}}>
      <View style={{padding: 15, alignItems: 'center'}}>
        <View style={styles.viewPass}>
          <Image source={Images.perIcon4} />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Mật khẩu cũ"
          />
        </View>

        <View style={styles.viewPass}>
          <Image source={Images.perIcon4} />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Mật khẩu mới"
          />
        </View>

        <View style={styles.viewPass}>
          <Image source={Images.perIcon4} />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Nhập lại mật khẩu mới"
          />
        </View>

        <TouchableOpacity style={{marginTop: 30}}>
          <View
            style={{
              width: 120,
              height: 30,
              backgroundColor: Color.main,
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <View
              style={{
                flexDirection: 'column',
                height: 28,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Nunito',
                  fontSize: 14,
                }}>
                Đổi mật khẩu
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePassword;
