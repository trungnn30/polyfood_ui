import './BannerArea.css';
import productItems from '../../Product/Product';

import { Col, Row } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useState } from 'react';

function BannerArea() {
    const [products, setProducts] = useState(productItems);
    return (
        <div className="banner-area py-45 px-70">
            <div className="text-align-center">
                <p className="mb-20">SẢN PHẨM TIÊU BIỂU</p>
                <Row justify="space-between" gutter={[32, 16]}>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={4}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={30}
                        loop={true}
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <Col xs={6} lg={6} md={24} sm={24}>
                                    <div className="banner-wrap">
                                        <img src={product.img} alt="" className="banner-img" />
                                    </div>
                                </Col>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* <Col xs={6} lg={6} md={24} sm={24}>
                        <div className="banner-wrap">
                            <img src="./assets/img/product3.png" alt="" className="banner-img" />
                        </div>
                    </Col>
                    <Col xs={6} lg={6} md={24} sm={24}>
                        <div className="banner-wrap">
                            <img src="./assets/img/product4.png" alt="" className="banner-img" />
                        </div>
                    </Col>
                    <Col xs={6} lg={6} md={24} sm={24}>
                        <div className="banner-wrap">
                            <img src="./assets/img/product5.png" alt="" className="banner-img" />
                        </div>
                    </Col>
                    <Col xs={6} lg={6} md={24} sm={24}>
                        <div className="banner-wrap">
                            <img src="./assets/img/product6.png" alt="" className="banner-img" />
                        </div>
                    </Col> */}
                </Row>
            </div>
        </div>
    );
}

export default BannerArea;
