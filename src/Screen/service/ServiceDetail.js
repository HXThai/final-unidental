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
    TextInput
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from '../Styles/ServiceHistoryScreenStyles';
import Color from '../../Theme/Color';
import Images from '../../Theme/Images';

const ServiceDetail = (props) => {
    const status = props?.route?.params?.status||null;
    // console.log(props?.route?.params?.status)
    const [dataProduct, setDataProduct] = useState([
        {
            image: Images.imgDVNoiBat2,
            title: 'Mặt dán sứ veneer',
            description: 'Răng sứ veneer là mặt dán sứ bọc dùng để bọc bên ngoài bề mặt răng nhằm che lấp các khuyết điểm khi răng bị tổn thương cấu trúc hoặc xỉn màu, ố vàng và đem đến cho khách hàng một hàm răng đều, đẹp, trắng sáng bền vững theo thời gian.',
            price: 29000,
            priceDiscount: 19000,
            timeStart: '12/11/2020',
            timeEnd: '12/11/2020',
        },
        {
            image: Images.imgDVNoiBat1,
            title: 'Tẩy trắng răng',
            description: 'Được đánh giá là công nghệ tẩy trắng răng hiện đại nhất hiện nay. Với việc sử dụng ánh sáng xanh sẽ kích hoạt phản ứng làm cắt đứt các liên kết màu trong men, ngà răng. Từ đó, đẩy nhanh quá trình làm trắng. Giúp răng trắng hơn mà không thay đổi cấu trúc men, ngà răng, không gây ê buốt. Thời gian thực hiện chỉ khoảng 1 tiếng.',
            price: 59000,
            priceDiscount: 69000,
            timeStart: '12/11/2020',
            timeEnd: '12/11/2020',
        },
        {
            image: Images.imgDVNoiBat3,
            title: 'Răng sứ thẩm mỹ',
            description: 'Răng sứ thẩm mỹ là loại răng được tạo có màu sắc và hình dáng như răng thật. Răng này được dùng để phục hình cho một hoặc nhiều răng hư hoặc bị mất. Răng sứ thẩm mỹ được dùng như cách phục hình răng cho các răng có khuyết điểm. Mục đích làm răng thẩm mỹ để hàm răng đẹp và ăn nhai tốt.',
            price: 29000,
            priceDiscount: 19000,
            timeStart: '12/11/2020',
            timeEnd: '12/11/2020',
        },
        {
            image: Images.imgDVNoiBat4,
            title: 'Cấy ghép Implant là một quy trình đòi hỏi cao về trình độ cũng như kỹ năng tay nghề của bác sĩ. Mặc dù có tỷ lệ thành công cao nhất so với tất cả các loại phục hình khác, quy trình cấy ghép Implant có thành công hay không phụ thuộc rất nhiều vào chất lượng trụ implant đươc cấy ghép, loại xương ghép được chọn, chuyên môn và kinh nghiệm của bác sĩ phẫu thuật nha khoa. Tìm hiểu về quy trình cấy ghép răng Implant sẽ giúp bệnh nhân có cái nhìn tổng quan về cơ chế hoạt động của điều trị này.Đầu tiên Bác sĩ đánh giá tình trạng mất răng qua thăm khám tại chỗ và phim Xquang (tốt nhất là phim CT) để lập một kế hoạch điều trị phù hợp nhất cho bạn.',
            description: '',
            price: 29000,
            priceDiscount: 19000,
            timeStart: '12/11/2020',
            timeEnd: '12/11/2020',
        },
        {
            image: Images.imgDVNoiBat5,
            title: 'Niềng răng',
            description: 'Các bác sĩ chỉnh nha sẽ tiến hành khảo sát, kiểm tra tình trạng răng, lấy dấu răng, chụp X-Quang xương hàm, xương sọ, lấy tất cả dữ liệu và đưa vào phân tích bằng phần mềm trên máy vi tính và dựa vào các dữ liệu đó để lên kế hoạch điều trị',
            price: 29000,
            priceDiscount: 19000,
            timeStart: '12/11/2020',
            timeEnd: '12/11/2020',
        },
    ]);
    useEffect(() => { }, []);

    return (
        <View style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>
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
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                    <View style={styles.bottom}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: Color.main }}>Niềng răng trong suốt không cần mắc cài</Text>
                        <Text style={{ fontSize: 13, marginTop: 10 }}>
                            Giá niêm yết: <Text style={{ color: Color.main }}>2.000.000 đ</Text>
                        </Text>
                        <Text style={{ fontSize: 13, marginTop: 10 }}>
                            Giá khuyến mãi:{' '}
                            <Text style={{ color: Color.priceDiscount }}>2.000.000 đ</Text>
                        </Text>
                        <Text style={{ marginTop: 10, marginBottom: 10 }}>Áp dụng:
                            <Text style={{
                                color: Color.main,
                                fontSize: 13
                            }}>
                                12-12-2020 - 12-12-2020
                            </Text>
                        </Text>
                        <Text style={{ fontSize: 13 }}>Niềng răng trong suốt không mắc cài Incognito là một bước tiến mới trong ngành nha khoa thẩm mỹ, vừa có khả năng dịch chuyển răng hiệu quả lại vừa đảm bảo được tính thẩm mỹ cao cho người niềng.</Text>
                    </View>
                    {
                        status
                            ?
                            (status == 4
                                ?
                                <View style={{flexDirection:'row'}}>
                                    <Text>Trạng thái: </Text>
                                    <Text style={{color:Color.main,fontStyle:'italic'}}>Chờ xác nhận</Text>
                                </View>
                                :
                                (
                                    status == 1
                                        ?
                                        <View style={{flexDirection:'row'}}>
                                            <Text>Trạng thái: </Text>
                                            <Text style={{color:Color.main,fontStyle:'italic'}}>Đang xử lý</Text>
                                        </View>
                                        :
                                        <View style={{flexDirection:'row'}}>
                                            <Text>Trạng thái: </Text>
                                            <Text style={{color:Color.main,fontStyle:'italic'}}>Đã hoàn thành</Text>
                                        </View>
                                )
                            )
                            :
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                <Text style={{ fontWeight: '1000', color: Color.main }}>ĐĂNG KÝ NHẬN ƯU ĐÃI & TƯ VẤN NHA KHOA</Text>
                                <Text style={{ fontSize: 13, color: 'grey' }}>(Quý khách vui lòng điền đầy đủ thông tin để Nhận Ưu đãi)</Text>
                                <View style={{ marginTop: 10 }}>
                                    <View style={{
                                        height: 40,
                                        width: Dimensions.get('window').width * 0.9,
                                        borderWidth: 1,
                                        marginTop: 5,
                                        color: 'grey',
                                        // opacity: 0.2,
                                        borderRadius: 5,
                                        borderColor: 'gray',
                                    }}>
                                        <TextInput
                                            style={{
                                                height: 40,
                                                color: '#000000',
                                                marginLeft: 5,
                                                fontFamily: 'Nunito',
                                            }}
                                            placeholder="Họ và tên"
                                            placeholderTextColor="gray"
                                            onChangeText={(text) => { }}
                                            value={''}
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{
                                            height: 40,
                                            width: Dimensions.get('window').width * 0.425,
                                            borderWidth: 1,
                                            marginTop: 5,
                                            color: 'grey',
                                            // opacity: 0.2,
                                            borderRadius: 5,
                                            borderColor: 'gray',
                                        }}>
                                            <TextInput
                                                style={{
                                                    height: 40,
                                                    color: '#000000',
                                                    marginLeft: 5,
                                                    fontFamily: 'Nunito',
                                                }}
                                                placeholder="Địa chỉ Email"
                                                placeholderTextColor="gray"
                                                onChangeText={(text) => { }}
                                                value={''}
                                            />
                                        </View>
                                        <View style={{
                                            height: 40,
                                            width: Dimensions.get('window').width * 0.425,
                                            borderWidth: 1,
                                            marginTop: 5,
                                            color: 'grey',
                                            // opacity: 0.2,
                                            borderRadius: 5,
                                            borderColor: 'gray',
                                        }}>
                                            <TextInput
                                                style={{
                                                    height: 40,
                                                    color: '#000000',
                                                    marginLeft: 5,
                                                    fontFamily: 'Nunito',
                                                }}
                                                placeholder="Số điện thoại"
                                                placeholderTextColor="gray"
                                                onChangeText={(text) => { }}
                                                value={''}
                                            />
                                        </View>
                                    </View>
                                    <View style={{
                                        height: 80,
                                        width: Dimensions.get('window').width * 0.9,
                                        borderWidth: 1,
                                        marginTop: 5,
                                        color: 'grey',
                                        // opacity: 0.2,
                                        borderRadius: 5,
                                        borderColor: 'gray',
                                    }}>
                                        <TextInput
                                            style={{
                                                height: 80,
                                                color: '#000000',
                                                marginLeft: 5,
                                                fontFamily: 'Nunito',
                                            }}
                                            placeholder="Nội dung cần tư vấn"
                                            placeholderTextColor="gray"
                                            onChangeText={(text) => { }}
                                            value={''}
                                        />
                                    </View>
                                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>
                                        <TouchableOpacity style={{ backgroundColor: Color.main, padding: 10, borderRadius: 5 }}>
                                            <Text style={{ color: '#fff' }}>Đăng ký</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                    }

                    <View style={{ marginBottom: 60 }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: 20,
                            }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Nunito',
                                    fontWeight: '700',
                                    color: Color.main,
                                }}>
                                Dịch vụ khác
                            </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate('ProductScreen');
                                }}>
                                <Text
                                    style={{
                                        color: Color.main,
                                        fontSize: 12,
                                        fontFamily: 'Nunito',
                                        fontWeight: 'normal',
                                        fontStyle: 'italic'
                                    }}>
                                    Xem tất cả
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    marginBottom: 20,
                                }}>
                                <ScrollView horizontal={true}>
                                    {dataProduct.map((item, index) => {
                                        return (
                                            <View
                                                style={{
                                                    shadowColor: '#000',
                                                    shadowOffset: { width: 0, height: 2 },
                                                    shadowOpacity: 0.8,
                                                    shadowRadius: 0,
                                                    elevation: 2,
                                                    width: 150,
                                                    height: 215,
                                                    backgroundColor: 'white',
                                                    marginBottom: 8,
                                                    marginTop: 15,
                                                    borderRadius: 10,
                                                    flexDirection: 'column',
                                                    marginRight: 15,
                                                    alignItems: 'center',
                                                }}>
                                                <Image
                                                    source={item.image}
                                                    style={{ width: 150, height: 150 }}
                                                />
                                                <View
                                                    style={{
                                                        width: '90%',
                                                    }}>
                                                    <Text numberOfLines={2} style={{ fontSize: 12, color: Color.price }}>
                                                        {item.title}
                                                    </Text>
                                                    <View
                                                        style={{
                                                            flexDirection: 'row',
                                                            marginTop: 5,
                                                            justifyContent: 'space-between',
                                                            width: '100%',
                                                        }}>
                                                        <View style={{ flexDirection: 'row', }}>
                                                            <Text
                                                                style={{
                                                                    fontSize: 13,
                                                                    color: Color.priceDiscount,
                                                                }}>
                                                                {styles.dynamicSort(item.priceDiscount)}{'đ '}
                                                            </Text>
                                                            <Text
                                                                style={{
                                                                    fontSize: 11,
                                                                    color: Color.price,
                                                                    textDecorationLine: 'line-through',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                {styles.dynamicSort(item.price)}{'đ'}
                                                            </Text>
                                                        </View>
                                                        <MaterialIcons
                                                            name={'add-shopping-cart'}
                                                            size={20}
                                                            color={Color.price}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        );
                                    })}
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default ServiceDetail;
