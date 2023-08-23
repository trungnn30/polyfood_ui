import { CommentOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function TestimonialSwiper() {
    return (
        <div className="testimonial-wrap">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                <SwiperSlide>
                    <div className="single-testimonial">
                        <img src="./assets/img/guy1.jpg" alt="" style={{ borderRadius: '100%' }} />
                        <p className="mt-20">
                            Tuyệt vời từ không gian, dịch vụ cho đến đồ ăn đều rất tinh tế. Chắc chắn sẽ quay lại cùng
                            với gia đình trong tương lai.
                        </p>
                        <div className="client-info">
                            <CommentOutlined
                                className="mt-20"
                                style={{
                                    fontSize: '24px',
                                }}
                            />
                            <p className="mt-20 mb-5">Lmao Trạch Đông</p>
                            <span>Khách hàng</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-testimonial">
                        <img src="./assets/img/guy2.jpg" alt="" style={{ borderRadius: '100%' }} />
                        <p className="mt-20">
                            Hiếm có nhà hàng chay nào lại quan tâm tới khách hàng như Poly Food, nhân viên tư vấn số
                            lượng đồ ăn hợp lý, trước khi đóng order hỏi khách có bị dị ứng với thành phần nào không.
                            Thực sự rất ấn tượng về chất lượng phục vụ cũng như đồ ăn của các bạn. Chắc chắn sẽ quay lại
                            vào lần gần nhất.
                        </p>
                        <div className="client-info">
                            <CommentOutlined
                                className="mt-20"
                                style={{
                                    fontSize: '24px',
                                }}
                            />
                            <p className="mt-20 mb-5">Vịt Trump</p>
                            <span>Khách hàng</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default TestimonialSwiper;
