import ButtonComponent from '../../Components/Button';
import './SubcribeArea.css';
import { Col, Row } from 'antd';

function SubcribeArea() {
    return (
        <div className="subcribe-area py-45">
            <Row>
                <Col xs={10} lg={10} md={10} sm={10} className="mx-auto text-align-center">
                    <div className="subcribe-wrap">
                        <h1>Đăng ký</h1>
                        <p className="my-20" style={{ fontSize: '16px' }}>
                            Đăng ký để nhận những thông báo mới nhất của chúng tôi
                        </p>
                        <p className="mb-20">
                            <input type="email" placeholder="Địa chỉ email của bạn" />
                        </p>
                        <ButtonComponent primarySubcribe className="mt-20">
                            ĐĂNG KÝ
                        </ButtonComponent>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default SubcribeArea;
