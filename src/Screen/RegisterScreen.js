import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../Theme/Color';
import Images from '../Theme/Images';
import Color from '../Theme/Color';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RegisterScreenStyles';

const LoginScreen = (props) => {
  const [name, onChangeName] = useState('');
  const [password, onChangePassword] = useState('');
  const [phone, onChangePhone] = useState('');
  const [confirmPassword, onChangeConfirmPassword] = useState('');
  const [referralCode, onChangeReferralCode] = useState('');
  const [verification, onChangeVerification] = useState('');
  const {goBack} = props.navigation;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.main}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '90%',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => goBack()}>
              <MaterialIcons
                name={'keyboard-backspace'}
                size={35}
                color={Color.main}
              />
            </TouchableOpacity>
            <Image
              source={Images.LogoVinadoctor}
              // resizeMode="contain"
              style={{width: 106, height: 106}}
            />
            <MaterialIcons
              name={'keyboard-backspace'}
              size={35}
              color="#FFFFFF"
            />
          </View>
          {/* <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}> */}

          <View style={styles.textLogin}>
            <Text style={styles.configTextLogin}>Đăng ký</Text>
          </View>
          <ScrollView
            style={{
              width: '100%',
              height: Dimensions.get('window').height - 200,
              marginBottom: 10,
            }}>
            <View style={styles.phone}>
              <View style={{flexDirection: 'row', width: '90%'}}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontFamily: 'Nunito', fontSize: 14}}>
                    Họ và tên
                  </Text>
                </View>
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={{
                    height: 40,
                    color: '#000000',
                    marginLeft: 5,
                    fontFamily: 'Nunito',
                  }}
                  placeholder="Nhập họ và tên"
                  placeholderTextColor="gray"
                  onChangeText={(text) => onChangeName(text)}
                  value={name}
                />
              </View>
            </View>
            <View style={styles.password}>
              <View style={{flexDirection: 'row', width: '90%'}}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontFamily: 'Nunito', fontSize: 14}}>
                    Số điện thoại
                  </Text>
                </View>
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={{
                    height: 40,
                    color: '#000000',
                    marginLeft: 5,
                    fontFamily: 'Nunito',
                  }}
                  placeholder="Nhập số điện thoại"
                  placeholderTextColor="gray"
                  onChangeText={(text) => onChangePhone(text)}
                  value={phone}
                  keyboardType="number-pad"
                />
              </View>
            </View>
            <View style={styles.password}>
              <View style={{flexDirection: 'row', width: '90%'}}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontFamily: 'Nunito', fontSize: 14}}>
                    Mật khẩu
                  </Text>
                </View>
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={{
                    height: 40,
                    color: '#000000',
                    marginLeft: 5,
                    fontFamily: 'Nunito',
                  }}
                  placeholder="Nhập mật khẩu"
                  placeholderTextColor="gray"
                  onChangeText={(text) => onChangePassword(text)}
                  value={password}
                  // secureTextEntry={true}
                />
              </View>
            </View>
            <View style={styles.password}>
              <View style={{flexDirection: 'row', width: '90%'}}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontFamily: 'Nunito', fontSize: 14}}>
                    Xác nhận mật khẩu
                  </Text>
                </View>
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={{
                    height: 40,
                    color: '#000000',
                    marginLeft: 5,
                    fontFamily: 'Nunito',
                  }}
                  placeholder="Nhập lại mật khẩu"
                  placeholderTextColor="gray"
                  onChangeText={(text) => onChangeConfirmPassword(text)}
                  value={confirmPassword}
                  // secureTextEntry={true}
                />
              </View>
            </View>
            <View style={styles.password}>
              <View style={{flexDirection: 'row', width: '90%'}}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontFamily: 'Nunito', fontSize: 14}}>
                    Mã giới thiệu (Có thể bỏ qua)
                  </Text>
                </View>
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={{
                    height: 40,
                    color: '#000000',
                    marginLeft: 5,
                    fontFamily: 'Nunito',
                  }}
                  placeholder="Nhập mã giới thiệu"
                  placeholderTextColor="gray"
                  onChangeText={(text) => onChangeReferralCode(text)}
                  value={referralCode}
                  // secureTextEntry={true}
                />
              </View>
            </View>
            <View style={styles.password}>
              <View style={{flexDirection: 'row', width: '90%'}}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontFamily: 'Nunito', fontSize: 14}}>
                    Mã xác nhận
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 40,
                  width: '90%',
                  borderWidth: 1,
                  marginTop: 5,
                  color: 'grey',
                  // opacity: 0.2,
                  borderRadius: 20,
                  borderColor: 'gray',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  style={{
                    height: 40,
                    color: '#000000',
                    marginLeft: 5,
                    fontFamily: 'Nunito',
                    width: '80%',
                  }}
                  placeholder="Nhập mã xác nhận"
                  placeholderTextColor="gray"
                  onChangeText={(text) => onChangeVerification(text)}
                  value={verification}
                  // secureTextEntry={true}
                />
                <View
                  style={{
                    height: 40,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginRight: 10,
                  }}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: 'Nunito',
                        color: Color.getCode,
                        fontSize: 14,
                      }}>
                      Lấy mã
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {}}
              style={{width: '100%', alignItems: 'center'}}>
              <View style={styles.button}>
                <View
                  style={{
                    flexDirection: 'column',
                    height: 42,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Nunito',
                      fontSize: 14,
                    }}>
                    ĐĂNG KÝ
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.password}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 'Nunito',
                    fontSize: 14,
                    color: 'gray',
                  }}>
                  Bằng việc đăng ký, bạn đã đồng ý với{' '}
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: 'Nunito',
                      color: Color.main,
                    }}>
                    Điều khoản dịch vụ
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  justifyContent: 'center',
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 'Nunito',
                      fontSize: 14,
                      color: 'gray',
                    }}>
                    &{' '}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: 'Nunito',
                      color: Color.main,
                    }}>
                    Chính sách riêng tư{' '}
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 'Nunito',
                    fontSize: 14,
                    color: 'gray',
                  }}>
                  của chúng tôi.
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 25,
                marginBottom: 20,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 'Nunito',
                  fontSize: 14,
                  color: 'gray',
                  textDecorationLine: 'underline',
                  textDecorationColor: 'gray',
                }}>
                Bạn có tài khoản?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('LoginScreen');
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Nunito',
                    color: Color.main,
                  }}>
                  Đăng nhập{' '}
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 'Nunito',
                  fontSize: 14,
                  color: 'gray',
                  textDecorationLine: 'underline',
                  textDecorationColor: 'gray',
                }}>
                tại đây.
              </Text>
            </View>
          </ScrollView>
        </View>
        {/* </KeyboardAvoidingView> */}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
