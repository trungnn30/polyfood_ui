import './Register.css';
import ButtonComponent from '../../Components/Button';

import { Col, Row } from 'antd';
import { Form, Input } from 'antd';

function Register() {
    return (
        <div className="tab-content">
            <div className="register-form-container mt-40">
                <Row>
                    <Col xs={8} lg={8} md={12} sm={12} className="mx-auto">
                        <Form
                            name="normal_register"
                            className="register-form p-80"
                            initialValues={{
                                remember: true,
                            }}
                        >
                            <Form.Item
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập họ tên!',
                                    },
                                ]}
                            >
                                <Input size="large" placeholder="Họ tên" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập mật khẩu!',
                                    },
                                ]}
                            >
                                <Input size="large" type="password" placeholder="Mật khẩu" />
                            </Form.Item>
                            <Form.Item
                                name="re-password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập lại mật khẩu!',
                                    },
                                ]}
                            >
                                <Input size="large" type="password" placeholder="Xác nhận mật khẩu" />
                            </Form.Item>
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
                                    <ButtonComponent loginRegister>ĐĂNG KÝ</ButtonComponent>
                                </div>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Register;
