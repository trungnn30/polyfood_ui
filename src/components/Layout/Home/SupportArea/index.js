import './SupportArea.css';
import { Col, Row } from 'antd';

function SupportArea() {
    return (
        <div className="support-area py-45">
            <Row className="text-align-center mt-16" justify="space-between" gutter={[16, 16]}>
                <Col xs={8} lg={8} md={24} sm={24}>
                    <div
                        className="support-wrap"
                        style={{
                            background: 'rgb(204, 251, 233)',
                        }}
                    >
                        <div className="support-icon">
                            <img src="./assets/img/support-5.png" alt="" />
                        </div>
                        <div className="support-content">
                            <img src="./assets/img/support-8.png" alt="" />
                            <p>MIỄN PHÍ VẪN CHUYỂN CHO TẤT CẢ ĐƠN HÀNG</p>
                        </div>
                    </div>
                </Col>
                <Col xs={8} lg={8} md={24} sm={24}>
                    <div
                        className="support-wrap"
                        style={{
                            background: 'rgb(242, 251, 204)',
                        }}
                    >
                        <div className="support-icon">
                            <img src="./assets/img/support-6.png" alt="" />
                        </div>
                        <div className="support-content">
                            <img src="./assets/img/support-9.png" alt="" />
                            <p>ĐẢM BẢO HOÀN TIỀN TRONG VÒNG 5 NGÀY</p>
                        </div>
                    </div>
                </Col>
                <Col xs={8} lg={8} md={24} sm={24}>
                    <div
                        className="support-wrap"
                        style={{
                            background: 'rgb(221, 251, 204)',
                        }}
                    >
                        <div className="support-icon">
                            <img src="./assets/img/support-7.png" alt="" />
                        </div>
                        <div className="support-content">
                            <img src="./assets/img/support-10.png" alt="" />
                            <p>TRÊN MỖI ĐƠN HÀNG 500K</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default SupportArea;
