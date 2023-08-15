import ButtonComponent from '../../Components/Button';
import './FunfactArea.css';
import { Col, Row } from 'antd';
import Timer from './Timer';

function FunfactArea() {
    return (
        <div className="funfact-area py-45 px-70">
            <div className="funfact-container mx-auto">
                <Row gutter={[32, 16]}>
                    <Col xs={12} lg={12} md={24} sm={24}>
                        <div className="funfact-content text-align-center">
                            <p>Giao dịch trong ngày</p>
                            <Timer />
                            <div>
                                <ButtonComponent primary>Mua hàng ngay</ButtonComponent>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={12} md={24} sm={24}>
                        <div>
                            <img src="./assets/img/clock.png" alt="" className="funfact-img" />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default FunfactArea;
