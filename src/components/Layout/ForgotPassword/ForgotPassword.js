import './ForgotPassword.css';
import ButtonComponent from '../Components/Button';

import { Col, Row } from 'antd';
import { Form, Input } from 'antd';

function ForgotPassword() {
    return (
        <div className="tab-content">
            <div className="forgot-password-form-container mt-40">
                <Row>
                    <Col xs={8} lg={8} md={12} sm={12} className="mx-auto">
                        <Form
                            name="normal_forgot-password"
                            className="forgot-password-form p-80"
                            initialValues={{
                                remember: true,
                            }}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập email!',
                                    },
                                ]}
                            >
                                <Input size="large" type="email" placeholder="Email" />
                            </Form.Item>
                            <Form.Item>
                                <div className="d-flex justify-content-between">
                                    <ButtonComponent loginRegister>
                                        QUÊN MẬT KHẨU
                                    </ButtonComponent>
                                </div>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ForgotPassword;
