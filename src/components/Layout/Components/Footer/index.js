import {
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    YoutubeOutlined,
} from '@ant-design/icons';
import ButtonComponent from '../../Components/Button';
import './Footer.css';
import { Col, Row } from 'antd';
import { memo } from 'react';

function FooterArea() {
    return (
        <div className="footer-area pt-100 pb-70" style={{ backgroundColor: '#f7f7f7' }}>
            <div className="container">
                <Row gutter={[32]}>
                    <Col xs={6} lg={6} md={24} sm={24} className="text-align-center">
                        <img
                            src="/assets/img/GSlogo.png"
                            alt=""
                            style={{ width: '80%' }}
                        />
                        <p
                            style={{
                                letterSpacing: '0.9px',
                                color: '313131',
                                lineHeight: '24px',
                            }}
                            className="text-light"
                        >
                            Poly Food là nhà hàng Thuần chay và Cung cấp thực phẩm chay
                        </p>
                    </Col>
                    <Col xs={4} lg={4} md={24} sm={24}>
                        <div className="ml-30">
                            <p className="footer-title mb-10 text-light">Cửa hàng</p>
                            <ul>
                                <li>
                                    <ButtonComponent
                                        to={'/about'}
                                        primaryHover
                                        className="pl-0 pr-0 my-10 text-light"
                                    >
                                        Về chúng tôi
                                    </ButtonComponent>
                                </li>
                                <li>
                                    <ButtonComponent
                                        to={'/contact'}
                                        primaryHover
                                        className="pl-0 pr-0 my-10 text-light"
                                    >
                                        Liên hệ
                                    </ButtonComponent>
                                </li>
                                <li>
                                    <ButtonComponent
                                        to={'/blog'}
                                        primaryHover
                                        className="pl-0 pr-0 my-10 text-light"
                                    >
                                        Tin tức
                                    </ButtonComponent>
                                </li>
                                <li>
                                    <ButtonComponent
                                        to={'/contact'}
                                        primaryHover
                                        className="pl-0 pr-0 my-10 text-light"
                                    >
                                        Hỗ trợ
                                    </ButtonComponent>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={6} lg={6} md={24} sm={24}>
                        <div className="ml-30">
                            <p className="footer-title mb-10 text-light">
                                Chính sách mua hàng
                            </p>
                            <ul>
                                <li>
                                    <ButtonComponent
                                        to={'/contact'}
                                        primaryHover
                                        className="pl-0 pr-0 my-10 text-light"
                                    >
                                        Điều khoản
                                    </ButtonComponent>
                                </li>
                                <li>
                                    <ButtonComponent
                                        to={'/contact'}
                                        primaryHover
                                        className="pl-0 pr-0 my-10 text-light"
                                    >
                                        Chính sách & Bảo mật
                                    </ButtonComponent>
                                </li>
                                <li>
                                    <h4 className="text-light my-10">
                                        Theo dõi chúng tôi
                                    </h4>
                                </li>
                                <li>
                                    <div className="footer-list">
                                        <ButtonComponent
                                            primaryHover
                                            className="pl-0 pr-0 my-10 mr-10 text-light"
                                        >
                                            <FacebookOutlined />
                                        </ButtonComponent>
                                        <ButtonComponent
                                            primaryHover
                                            className="pl-0 pr-0 my-10 mr-10 text-light"
                                        >
                                            <YoutubeOutlined />
                                        </ButtonComponent>
                                        <ButtonComponent
                                            primaryHover
                                            className="pl-0 pr-0 my-10 mr-10 text-light"
                                        >
                                            <TwitterOutlined />
                                        </ButtonComponent>
                                        <ButtonComponent
                                            primaryHover
                                            className="pl-0 pr-0 my-10 mr-10 text-light"
                                        >
                                            <InstagramOutlined />
                                        </ButtonComponent>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={8} lg={8} md={24} sm={24}>
                        <div className="subcribe-footer ml-30">
                            <p className="footer-title mb-20 text-light">Đăng ký</p>
                            <p className="mb-20 text-light" style={{ color: '#7a7a7a' }}>
                                Nhận thông báo mới nhất qua email về những tin tức của
                                chúng tôi
                            </p>
                            <p className="mb-20">
                                <input type="email" placeholder="Nhập email của bạn" />
                            </p>
                            <ButtonComponent
                                primaryHover
                                className="pl-0 pr-0 btn-footer text-light"
                            >
                                ĐĂNG KÝ
                            </ButtonComponent>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default memo(FooterArea);
