import './Login.css';
import ButtonComponent from '../../Components/Button';

import { Col, Row } from 'antd';
import { Form, Input } from 'antd';

function Login() {
    return (
        <div className="tab-content">
            <div className="login-form-container mt-40">
                <Row>
                    <Col xs={8} lg={8} md={24} sm={24} className="mx-auto">
                        <Form
                            name="normal_login"
                            className="login-form p-80"
                            initialValues={{
                                remember: true,
                            }}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <Input size="large" placeholder="Email" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    size="large"
                                    type="password"
                                    placeholder="Mật khẩu"
                                />
                            </Form.Item>
                            <Form.Item>
                                <div className="d-flex justify-content-between">
                                    <ButtonComponent
                                        loginRegister
                                        to={'/admin/dashboard'}
                                    >
                                        ĐĂNG NHẬP
                                    </ButtonComponent>
                                    <ButtonComponent
                                        to={'/forgot-password'}
                                        primaryHover
                                        className="pl-0 pr-0"
                                    >
                                        Quên mật khẩu
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

export default Login;
