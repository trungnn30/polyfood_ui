import './AboutBannerArea.css';
import { Col, Row } from 'antd';

function AboutBannerArea() {
    return (
        <div className="container">
            <div className="about-banner-area py-45">
                <Row gutter={[32]}>
                    <Col xs={8} lg={8} md={24} sm={24}>
                        <div className="about-banner-wrap">
                            <img src="./assets/img/about/banner-about-1.jpg" alt="" className="about-banner-img" />
                        </div>
                    </Col>
                    <Col xs={8} lg={8} md={24} sm={24}>
                        <div className="about-banner-wrap">
                            <img src="./assets/img/about/banner-about-2.jpg" alt="" className="about-banner-img" />
                        </div>
                    </Col>
                    <Col xs={8} lg={8} md={24} sm={24}>
                        <div className="about-banner-wrap">
                            <img src="./assets/img/about/banner-about-3.jpg" alt="" className="about-banner-img" />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AboutBannerArea;
