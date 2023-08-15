import './AboutMissionArea.css';
import { Col, Row } from 'antd';

function AboutMissionArea() {
    return (
        <div className="container">
            <div className="about-mission-area py-45">
                <Row gutter={[32]}>
                    <Col xs={8} lg={8} md={24} sm={24}>
                        <div className="about-mission-wrap">
                            <h3 className="mb-20">Uy tín</h3>
                            <p className="text-align-justify">
                                Uy tín là điều Poly Food đã gây dựng và khẳng định được trong gần 10 năm qua. Chúng tôi
                                sẽ tiếp tục giữ vững giá trị kinh doanh cốt lõi này trong suốt chặng đường phía trước để
                                phát triển bền vững.
                            </p>
                        </div>
                    </Col>
                    <Col xs={8} lg={8} md={24} sm={24}>
                        <div className="about-mission-wrap">
                            <h3 className="mb-20">Đồng hành</h3>
                            <p className="text-align-justify">
                                Đồng hành là cam kết và cũng là giá trị nổi bật của Poly Food. Chúng tôi đồng hành cùng
                                nhà cung cấp, đồng hành cùng khách hàng và đồng hành cùng khách hàng của khách hàng.
                            </p>
                        </div>
                    </Col>
                    <Col xs={8} lg={8} md={24} sm={24}>
                        <div className="about-mission-wrap">
                            <h3 className="mb-20">Trách nhiệm</h3>
                            <p className="text-align-justify">
                                Trách nhiệm là nền tảng tạo nên chất lượng của sản phẩm & dịch vụ của Poly Food, từ đó
                                mới khiến khách hàng hài lòng và gắn bó lâu dài.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AboutMissionArea;
