import React, { useEffect, useState } from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Images from '../../Theme/Images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//styles
import color from '../../Theme/Color';

const SaleScreen = (props) => {
    const [dataSale, setDataSale] = useState([
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
    const onClickChangeTab = (value) => {
        setTab(value);
    };
    const _showSaleDetail = () => {
        props.navigation.navigate('SaleDetailScreen');
    };
    const withScreen = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ backgroundColor: '#fff' }}>
                <View style={{ width: '100%', alignItems: 'center', marginTop: 10 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            paddingTop: 16,
                            justifyContent: 'space-between',
                            marginBottom: 20
                        }}>
                        <ScrollView horizontal={false}>
                            {dataSale.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        style={{
                                            marginBottom: 16,
                                            borderBottomWidth: 1,
                                            borderBottomLeftRadius: 40,
                                            borderBottomRightRadius: 40,
                                            borderColor: '#dedede',
                                            // paddingTop: 8,
                                            paddingBottom: 8
                                        }}
                                        onPress={() => { _showSaleDetail(); }}>
                                        <View style={{ flexDirection: 'row', width: '100%', paddingLeft: 10 }}>
                                            <View>
                                                <Image source={item.image}
                                                    style={{ width: (withScreen - 32) * (3 / 10), height: (((withScreen - 32) * (3 / 10) * (3 / 4))), borderRadius: 16 }} />
                                            </View>
                                            <View style={{ justifyContent: 'space-between', paddingRight: 16, width: (withScreen - 10) * 3 / 4, paddingLeft: 8 }}>
                                                <Text numberOfLines={1} style={{ color: color.main, fontSize: 14 }}>{item.title}</Text>
                                                <Text numberOfLines={2} style={{ fontSize: 14 }}>{item.description}</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text
                                                        style={{
                                                            fontSize: 13,
                                                            color: color.priceDiscount,
                                                        }}>
                                                        {item.priceDiscount}{'đ '}
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontSize: 11,
                                                            color: color.price,
                                                            textDecorationLine: 'line-through',
                                                            fontStyle: 'italic'
                                                        }}>
                                                        {item.price}{'đ'}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <MaterialIcons name='history' size={23} color='gray' />
                                                    <Text style={{ fontSize: 12, color: color.price }}>
                                                        {item.timeStart} - {item.timeEnd}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default SaleScreen;