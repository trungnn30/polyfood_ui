import ButtonComponent from '../../Components/Button';
import './Footer.css';
import { Col, Row } from 'antd';
import { memo } from 'react';

function FooterArea() {
    return (
        <div className="footer-area pt-100 pb-70" style={{ backgroundColor: '#f7f7f7' }}>
            <div className="container">
                <Row gutter={[32]}>
                    <Col xs={4} lg={4} md={24} sm={24}>
                        <img src="/assets/img/GSlogo.png" alt="" style={{ width: '100%' }} />
                        <p
                            style={{
                                letterSpacing: '0.9px',
                                color: '313131',
                                lineHeight: '24px',
                            }}
                        >
                            Poly Food - © FPT Polytechnic Hà Nội
                        </p>
                    </Col>
                    <Col xs={4} lg={4} md={24} sm={24}>
                        <div>
                            <p className="footer-title mb-10">Giới thiệu</p>
                            <ul>
                                <li>
                                    <ButtonComponent primaryHover className="pl-0 pr-0 my-10">
                                        Giới thiệu
                                    </ButtonComponent>
                                </li>
                                <li>
                                    <ButtonComponent primaryHover className="pl-0 pr-0 my-10">
                                        Địa chỉ
                                    </ButtonComponent>
                                </li>
                                <li>
                                    <ButtonComponent primaryHover className="pl-0 pr-0 my-10">
                                        Liên hệ
                                    </ButtonComponent>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={4} lg={4} md={24} sm={24}>
                        <div>
                            <p className="footer-title mb-10">Liên kết</p>
                            <ul>
                                <li>
                                    <ButtonComponent primaryHover className="pl-0 pr-0 my-10">
                                        Returns
                                    </ButtonComponent>
                                </li>
                                <li>
                                    <ButtonComponent primaryHover className="pl-0 pr-0 my-10">
                                        Support Policy
                                    </ButtonComponent>
                                </li>
                                <li>
                                    <ButtonComponent primaryHover className="pl-0 pr-0 my-10">
                                        Size guide
                                    </ButtonComponent>
                                </li>
                                <li>
                                    <ButtonComponent primaryHover className="pl-0 pr-0 my-10">
                                        FAQs
                                    </ButtonComponent>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={4} lg={4} md={24} sm={24}>
                        <div>
                            <p className="footer-title mb-10">Theo dõi</p>
                            <ul>
                                <li>
                                    <ButtonComponent primaryHover className="pl-0 pr-0 my-10">
                                        Facebook
                                    </ButtonComponent>
                                </li>
                                <li>
                                    <ButtonComponent primaryHover className="pl-0 pr-0 my-10">
                                        Twitter
                                    </ButtonComponent>
                                </li>
                                <li>
                                    <ButtonComponent primaryHover className="pl-0 pr-0 my-10">
                                        Instagram
                                    </ButtonComponent>
                                </li>
                                <li>
                                    <ButtonComponent primaryHover className="pl-0 pr-0 my-10">
                                        Youtube{' '}
                                    </ButtonComponent>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={8} lg={8} md={24} sm={24}>
                        <div className="subcribe-footer">
                            <p className="footer-title mb-20">Đăng ký</p>
                            <p className="mb-20" style={{ color: '#7a7a7a' }}>
                                Nhận thông báo mới nhất qua email về những tin tức của chúng tôi
                            </p>
                            <p className="mb-20">
                                <input type="email" placeholder="Nhập email của bạn" />
                            </p>
                            <ButtonComponent primaryHover className="pl-0 pr-0 btn-footer">
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
