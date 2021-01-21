import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../Screen/SplashScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../Screen/Home';
import AccumulatePointScreen from '../Screen/AccumulatePointScreen';
import ServiceHistoryScreen from '../Screen/ServiceHistoryScreen';
import ServiceDetail from '../Screen/service/ServiceDetail';
import PersonalScreen from '../Screen/PersonalScreen';
import PersonalDetail from '../Screen/personal/PersonalDetail';
import WarrantyScreen from '../Screen/personal/WarrantyScreen';
import NotificationScreen from '../Screen/personal/NotificationScreen';
import ChangePassword from '../Screen/personal/ChangePassword ';
import RateScreen from '../Screen/personal/RateScreen';
import ChatScreen from '../Screen/ChatScreen';
import ForgotPasswordScreen from '../Screen/ForgotPasswordScreen';
import Images from '../Theme/Images';
import {Image, View, TextInput, TouchableOpacity} from 'react-native';
import Color from '../Theme/Color';
import TestScreen from '../Screen/TestScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import LoginScreen from '../Screen/LoginScreen';
import RegisterScreen from '../Screen/RegisterScreen';
import ProductScreen from '../Screen/ProductScreen';
import ProductDetailScreen from '../Screen/ProductDetailScreen';
import CartScreen from '../Screen/CartScreen';

import ServiceScreen from '../Screen/service/ServiceScreen';

import NewsScreen from '../Screen/news/NewsScreen';
import NewsDetailScreen from '../Screen/news/NewsDetailScreen';

import SaleScreen from '../Screen/sale/SaleScreen';
import SaleDetailScreen from '../Screen/sale/SaleDetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const getTabBarVisibility = (route) => {
  const routename = getFocusedRouteNameFromRoute(route) ?? 'Home';
  if (routename == 'ProductScreen') {
    return false;
  }
  if (routename == 'ProductDetailScreen') {
    return false;
  }
  if (routename == 'CartScreen') {
    return false;
  }
  if (routename == 'ServiceScreen') {
    return false;
  }
  if (routename == 'PersonalDetail') {
    return false;
  }
  if (routename == 'WarrantyScreen') {
    return false;
  }
  if (routename == 'RateScreen') {
    return false;
  }
  if (routename == 'NotificationScreen') {
    return false;
  }
  if (routename == 'ChangePassword') {
    return false;
  }
  return true;
};

function TabNav(props) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarVisible: getTabBarVisibility(route),
        tabBarIcon: ({focused, color}) => {
          const routeName = route.name;
          let url;
          let size = 20;
          if (routeName === 'Trang chủ') {
            url = focused ? (
              <MaterialIcons name={'home'} size={28} color={Color.main} />
            ) : (
              <MaterialIcons name={'home'} size={28} color={'gray'} />
            );
          } else if (routeName === 'Chat với BS') {
            url = focused ? (
              <MaterialIcons name={'sms'} size={28} color={Color.main} />
            ) : (
              <MaterialIcons name={'sms'} size={28} color={'gray'} />
            );
          } else if (routeName === 'Lịch sử d.vụ') {
            url = focused ? (
              <MaterialIcons name={'assignment'} size={28} color={Color.main} />
            ) : (
              <MaterialIcons name={'assignment'} size={28} color={'gray'} />
            );
          } else if (routeName === 'Ảnh khách hàng') {
            url = focused ? (
              <MaterialIcons name={'queue'} size={28} color={Color.main} />
            ) : (
              <MaterialIcons name={'queue'} size={28} color={'gray'} />
            );
          } else if (routeName === 'Cá nhân') {
            url = focused ? (
              <MaterialIcons name={'person'} size={28} color={Color.main} />
            ) : (
              <MaterialIcons name={'person'} size={28} color={'gray'} />
            );
          }
          return url;
        },
      })}
      tabBarOptions={{
        activeTintColor: Color.main,
        inactiveTintColor: 'gray',
        style: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          height: 60,
          backgroundColor: '#fff',
        },
        tabStyle: {
          paddingVertical: 5,
        },
      }}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeStack}
        navigationOptions={{tabBarLabel: 'Trang chủ'}}
      />
      <Tab.Screen
        name="Chat với BS"
        component={ChatScreenStack}
        navigationOptions={{tabBarLabel: 'Chat với BS'}}
      />
      <Tab.Screen
        name="Lịch sử d.vụ"
        component={ServiceHistoryScreenStack}
        navigationOptions={{tabBarLabel: 'Lịch sử dịch vụ'}}
      />
      <Tab.Screen
        name="Ảnh khách hàng"
        component={AccumulatePointScreenStack}
        navigationOptions={{tabBarLabel: 'Ảnh khách hàng'}}
      />
      <Tab.Screen
        name="Cá nhân"
        component={PersonalScreenStack}
        navigationOptions={{tabBarLabel: 'Cá nhân'}}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ServiceHistoryScreenStack(props) {
  return (
    <Stack.Navigator
    screenOptions={({ route }) => ({
      tabBarVisible: getTabBarVisibility(route),
    })}>
      <Stack.Screen
        name="ServiceHistoryScreen"
        component={ServiceHistoryScreen}
        options={{
          headerTitle: 'Lịch sử dịch vụ',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="ServiceDetail"
        component={ServiceDetail}
        options={{
          headerTitle: 'Chi tiết dịch vụ',
          headerTitleStyle: { alignSelf: 'center', color: '#fff' },
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ServiceHistoryScreen');
              }}>
              <View style={{ marginLeft: 15 }}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ width: 22, marginRight: 15, }} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
// function ServiceScreenStack(props) {
//   return (
//     <Stack.Navigator
//     screenOptions={({ route }) => ({
//       tabBarVisible: getTabBarVisibility(route),
//     })}>
//       <Stack.Screen
//         name="ServiceScreen"
//         component={ServiceScreen}
//         options={{
//           headerTitle: 'Dịch vụ nổi bật',
//           headerTitleStyle: {alignSelf: 'center', color: '#fff'},
//           headerStyle: {
//             backgroundColor: Color.main,
//             elevation: 0,
//           },
//           headerLeft: null,
//         }}
//       />
//       <Stack.Screen
//         name="ServiceDetail"
//         component={ServiceDetail}
//         options={{
//           headerTitle: 'Đăng ký dịch vụ',
//           headerTitleStyle: { alignSelf: 'center', color: '#fff' },
//           headerStyle: {
//             backgroundColor: Color.main,
//             elevation: 0,
//           },
//           headerLeft: () => (
//             <TouchableOpacity
//               onPress={() => {
//                 props.navigation.navigate('ServiceHistoryScreen');
//               }}>
//               <View style={{ marginLeft: 15 }}>
//                 <MaterialIcons
//                   name={'keyboard-backspace'}
//                   size={30}
//                   color="#FFFFFF"
//                 />
//               </View>
//             </TouchableOpacity>
//           ),
//           headerRight: () => (
//             <View style={{ width: 22, marginRight: 15, }} />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
function ChatScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerTitle: 'Chat với bác sĩ',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
}

function PersonalScreenStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PersonalScreen"
        component={PersonalScreen}
        options={{
          headerTitle: 'Cá nhân',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => <View style={{width: 22, marginLeft: 15}} />,
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <View style={{marginRight: 15}}>
                <MaterialIcons name={'logout'} size={22} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="PersonalDetail"
        component={PersonalDetail}
        options={{
          headerTitle: 'Chào mừng Yang Yo',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('PersonalScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <View style={{marginRight: 15}}>
                <MaterialIcons name={'logout'} size={22} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="WarrantyScreen"
        component={WarrantyScreen}
        options={{
          headerTitle: 'Bảo hành',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('PersonalScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => <View style={{width: 22, marginRight: 15}} />,
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerTitle: 'Đổi mật khẩu',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('PersonalScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => <View style={{width: 22, marginRight: 15}} />,
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="RateScreen"
        component={RateScreen}
        options={{
          headerTitle: 'Đánh giá',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('PersonalScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <View style={{marginRight: 15}}>
                <MaterialIcons name={'logout'} size={22} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerTitle: 'Thông báo',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('PersonalScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => <View style={{width: 22, marginRight: 15}} />,
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  const [search, onChaneSearch] = useState('');
  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        tabBarVisible: getTabBarVisibility(route),
      })}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <View
                style={{
                  height: 40,
                  width: '100%',
                  backgroundColor: 'white',
                  borderRadius: 10,
                  flexDirection: 'row',
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{marginLeft: 10}}>
                  <MaterialIcons name="search" size={26} color={'gray'} />
                </View>
                <View
                  style={{
                    height: 40,
                    width: '85%',
                    color: 'grey',
                  }}>
                  <TextInput
                    style={{
                      height: 40,
                      color: '#000000',
                      marginLeft: 5,
                      fontFamily: 'Nunito',
                    }}
                    placeholder="Tìm kiếm sản phẩm"
                    placeholderTextColor="gray"
                    onChangeText={(text) => onChaneSearch(text)}
                    value={search}
                  />
                </View>
              </View>
            </View>
          ),
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: null,
          headerRight: () => (
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'white',
                marginRight: 15,
                borderRadius: 10,
                justifyContent: 'center',
              }}>
              <View style={{width: 40, height: 27, alignItems: 'center'}}>
                <Image
                  source={Images.cart}
                  // resizeMode="contain"
                  style={{width: 23, height: 23}}
                />
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          headerTitle: 'Dịch vụ',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('CartScreen')}>
                <Image
                  source={Images.cartHeader}
                  // resizeMode="contain"
                  style={{width: 22, height: 27}}
                />
              </TouchableOpacity>
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={{
          headerTitle: 'Chi tiết dịch vụ',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ProductScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('CartScreen')}>
                <Image
                  source={Images.cartHeader}
                  // resizeMode="contain"
                  style={{width: 22, height: 27}}
                />
              </TouchableOpacity>
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTitle: 'Giỏ hàng',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ProductScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="ServiceScreen"
        component={ServiceScreen}
        options={{
          headerTitle: 'Dịch vụ nổi bật',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Home')}>
                <Image
                  source={Images.cartHeader}
                  // resizeMode="contain"
                  style={{width: 22, height: 27}}
                />
              </TouchableOpacity>
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="ServiceDetail"
        component={ServiceDetail}
        options={{
          headerTitle: 'Chi tiết dịch vụ',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ServiceScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Home')}>
                <Image
                  source={Images.cartHeader}
                  // resizeMode="contain"
                  style={{width: 22, height: 27}}
                />
              </TouchableOpacity>
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{
          headerTitle: 'Tin tức',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('CartScreen')}>
                {/* <Image
                  source={Images.cartHeader}
                  // resizeMode="contain"
                  style={{width: 22, height: 27}}
                /> */}
              </TouchableOpacity>
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="NewsDetailScreen"
        component={NewsDetailScreen}
        options={{
          headerTitle: 'Chi tiết tin tức',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('NewsScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Home')}>
                {/* <Image
                  source={Images.cartHeader}
                  // resizeMode="contain"
                  style={{width: 22, height: 27}}
                /> */}
              </TouchableOpacity>
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="SaleScreen"
        component={SaleScreen}
        options={{
          headerTitle: 'Khuyến mại',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('CartScreen')}>
                {/* <Image
                  source={Images.cartHeader}
                  // resizeMode="contain"
                  style={{width: 22, height: 27}}
                /> */}
              </TouchableOpacity>
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="SaleDetailScreen"
        component={SaleDetailScreen}
        options={{
          headerTitle: 'Chi tiết khuyến mại',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('SaleScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Home')}>
                {/* <Image
                  source={Images.cartHeader}
                  // resizeMode="contain"
                  style={{width: 22, height: 27}}
                /> */}
              </TouchableOpacity>
            </View>
          ),
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

function AccumulatePointScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccumulatePointScreen"
        component={AccumulatePointScreen}
        options={{
          headerTitle: 'Ảnh khách hàng',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
}

export default App;
