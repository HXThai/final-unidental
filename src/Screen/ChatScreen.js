import React, {useEffect} from 'react';
import {
  Image, 
  KeyboardAvoidingView, 
  Text, 
  View,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Images from '../Theme/Images';
import Color from '../Theme/Color';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SplashScreenStyles';
const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ChatScreen = (props) => {
  const messages = [
    {
      text: 'Anh ơi cho em hỏi là giá trọn gói kia là sao ạ ',
      isSend: true,
    },
    {
      text:
        'Anh ơi cho em hỏi là giá trọn gói kia là sao ạ\n em cần mua căn nhà này à',
      isSend: true,
    },
    { text: 'Anh ơi cho em hỏi là giá trọn gói kia là sao ạ ',
     isSend: false
    },
    {
      text:
        'Anh ơi cho em hỏi là giá trọn gói kia là sao ạ\n em cần mua căn nhà này à',
      isSend: false,
    },
  ];

  return (
    // <LinearGradient
    //   colors={[
    //     Color.gradientStart,
    //     Color.gradientMiddleF,
    //     Color.gradientMiddleS,
    //     Color.gradientEnd,
    //   ]}
    //   start={{x: 0, y: 1}}
    //   end={{x: 1, y: 1}}
    //   style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView>
          <View
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height -100,
              // flex: 1,
              backgroundColor: '#FFFFFF',
              flexDirection: 'column',
              paddingBottom: 30
            }}>
            <View style={{flex: 1}}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{padding: 15}}>
                  {messages.map((message, key) => {
                    return message.isSend ? (
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row-reverse',
                          margin: 5,
                        }}>
                        <View
                          style={{
                            backgroundColor: '#112868',
                            borderRadius: 5,
                            padding: 10,
                          }}>
                          <Text style={{fontSize: 14, color: 'white'}}>
                            {message.text}
                          </Text>
                        </View>
                      </View>
                    ) : (
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          margin: 5,
                        }}>
                        <View style={{width: 40, height: 40, margin: 5}}>
                          {key === messages.length - 1 && (
                            <Image
                              style={{width: 33, height: 33}}
                              borderRadius={100}
                              source={Images.imgNotifi}
                            />
                          )}
                        </View>
                        <View
                          style={{
                            backgroundColor: '#F5F5F5',
                            borderRadius: 5,
                            padding: 10,
                          }}>
                          <Text style={{color: 'black'}}>{message.text}</Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
              <View
                style={{
                  marginBottom: 50,
                  padding: 10,
                  borderTopColor: '#11111150',
                  borderTopWidth: 1,
                  marginLeft: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <TextInput
                    style={{
                      flex: 7,
                      height: 40,
                      borderWidth: 1,
                      borderRadius: 20,
                      justifyContent: 'center',
                      paddingLeft: 15,
                    }}
                    placeholder="Nhập tin nhắn"
                  />
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={Images.imgSent} style={{width:30,height:30,color:'blue'}} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    // </LinearGradient>
  );
};

export default ChatScreen;
