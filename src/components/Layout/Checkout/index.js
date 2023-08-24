import './Checkout.css';
import ButtonComponent from '../Components/Button';

import { MoneyCollectOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Input, Row, Col, Form } from 'antd';
const { TextArea } = Input;

function CheckOutArea() {
    const cartItems = JSON.parse(localStorage.getItem('carts'));
    const [carts, setCarts] = useState(cartItems || []);
    return (
        <div className="checkout-area py-100">
            <div className="container">
                {carts.length > 0 && (
                    <div>
                        <Row gutter={32}>
                            <Col xs={14} lg={14} md={24} sm={24}>
                                <div className="billing-info-wrap">
                                    <h3>Thông tin khách hàng</h3>
                                    <Form layout="vertical">
                                        <Row gutter={[32, 16]}>
                                            <Col xs={24} lg={24} md={24} sm={24}>
                                                <Form.Item
                                                    label="Họ và tên"
                                                    name="name"
                                                    rules={[
                                                        {
                                                            required: true,
                                                        },
                                                    ]}
                                                >
                                                    <Input size="large" />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} lg={24} md={24} sm={24}>
                                                <Form.Item
                                                    label="Địa chỉ"
                                                    name="address"
                                                    rules={[
                                                        {
                                                            required: true,
                                                        },
                                                    ]}
                                                >
                                                    <Input size="large" />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={12} lg={12} md={24} sm={24}>
                                                <Form.Item
                                                    label="Điện thoại"
                                                    name="phone"
                                                    rules={[
                                                        {
                                                            required: true,
                                                        },
                                                    ]}
                                                >
                                                    <Input size="large" />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={12} lg={12} md={24} sm={24}>
                                                <Form.Item
                                                    label="Email"
                                                    name="email"
                                                    rules={[
                                                        {
                                                            required: true,
                                                        },
                                                    ]}
                                                >
                                                    <Input size="large" />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} lg={24} md={24} sm={24}>
                                                <Form.Item
                                                    label="Ghi chú"
                                                    name="note"
                                                    rules={[
                                                        {
                                                            required: false,
                                                        },
                                                    ]}
                                                >
                                                    <TextArea rows={6} />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </Col>
                            <Col xs={10} lg={10} md={24} sm={24}>
                                <div className="your-order-area">
                                    <h3>ĐƠN HÀNG</h3>
                                    <div className="your-order-wrap">
                                        <div className="your-order-top">
                                            <ul className="d-flex justify-content-between">
                                                <li>Sản Phẩm</li>
                                                <li>Tổng số lượng</li>
                                            </ul>
                                        </div>
                                        <div className="your-order-middle">
                                            <ul className="d-flex justify-content-between">
                                                <li>Sản Phẩm</li>
                                                <li>Tổng số lượng</li>
                                            </ul>
                                        </div>
                                        <div className="your-order-bottom">
                                            <ul className="d-flex justify-content-between">
                                                <li>Khuyến mãi vận chuyển</li>
                                                <li>Miễn phí vận chuyển</li>
                                            </ul>
                                        </div>
                                        <div className="your-order-total">
                                            <ul className="d-flex justify-content-between">
                                                <li className="order-total">Tổng cộng</li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <ButtonComponent primary2 className="mt-25">
                                            THANH TOÁN KHI NHẬN HÀNG
                                        </ButtonComponent>
                                    </div>
                                    <div>
                                        <ButtonComponent primary2 className="mt-25">
                                            THANH TOÁN ONLINE
                                        </ButtonComponent>
                                    </div>
                                    <div className="discount-code-wrap mt-25">
                                        <div className="title-wrap">
                                            <h4>Mã giảm giá</h4>
                                        </div>
                                        <div className="discount-code">
                                            <Form layout="vertical">
                                                <Form.Item
                                                    label="Nhập mã giảm giá của bạn (nếu có)."
                                                    name="discount"
                                                    rules={[
                                                        {
                                                            required: false,
                                                        },
                                                    ]}
                                                >
                                                    <Input size="large" />
                                                </Form.Item>
                                            </Form>
                                            <ButtonComponent primary2>ÁP DỤNG</ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                )}
                {carts.length === 0 && (
                    <div className="empty text-align-center">
                        <MoneyCollectOutlined className="empty-icon" />
                        <p>Không có sản phẩm trong giỏ hàng</p>
                        <ButtonComponent to={'/shop'} className="btn-add-empty mt-40">
                            Mua ngay
                        </ButtonComponent>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CheckOutArea;
