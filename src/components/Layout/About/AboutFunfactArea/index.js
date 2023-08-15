import './AboutFunfactArea.css';
import { Col, Row } from 'antd';
import { TrophyOutlined, BulbOutlined, IdcardOutlined, SmileOutlined } from '@ant-design/icons';

function AboutFunfactArea() {
    return (
        <div className="about-funfact-area text-align-center pt-100 pb-70" style={{ backgroundColor: '#f7f7f7' }}>
            <div className="container">
                <Row gutter={[32]}>
                    <Col xs={6} lg={6} md={24} sm={24}>
                        <div className="about-funfact-wrap">
                            <TrophyOutlined className="font-size-50" />
                            <p className="count my-20">100</p>
                            <p className="funfact-content">Được Cấp Chứng Nhận Cơ Sở An Toàn Thực Phẩm</p>
                        </div>
                    </Col>
                    <Col xs={6} lg={6} md={24} sm={24}>
                        <div className="about-funfact-wrap">
                            <BulbOutlined className="font-size-50" />
                            <p className="count my-20">100</p>
                            <p className="funfact-content">Đảm Bảo Tiêu Chuẩn An Toàn Vệ Sinh Thực Phẩm</p>
                        </div>
                    </Col>
                    <Col xs={6} lg={6} md={24} sm={24}>
                        <div className="about-funfact-wrap">
                            <IdcardOutlined className="font-size-50" />
                            <p className="count my-20">100</p>
                            <p className="funfact-content">Tận Tâm, Trách Nhiệm, Nhiệt Tình</p>
                        </div>
                    </Col>
                    <Col xs={6} lg={6} md={24} sm={24}>
                        <div className="about-funfact-wrap">
                            <SmileOutlined className="font-size-50" />
                            <p className="count my-20">1000</p>
                            <p className="funfact-content">Khách Hàng Hài Lòng</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AboutFunfactArea;
