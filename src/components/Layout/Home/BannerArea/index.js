import './BannerArea.css';
import { Col, Row } from 'antd';

function BannerArea() {
    return (
        <div className="banner-area py-45">
            <div className="text-align-center">
                <p className='mb-20'>SẢN PHẨM TIÊU BIỂU</p>
                <Row justify="space-between" gutter={[32, 16]}>
                    <Col xs={6} lg={6} md={24} sm={24}>
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
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default BannerArea;
