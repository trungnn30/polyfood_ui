import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Col, Row, Input } from 'antd/lib';
import {
    PhoneFilled,
    EnvironmentFilled,
    GlobalOutlined,
    BehanceOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    FacebookOutlined,
    TwitterOutlined,
} from '@ant-design/icons/lib/icons';

import ButtonComponent from '../Components/Button';
import './Contact.css';

const { TextArea } = Input;

function Contact() {
    const center = {
        lat: -3.745,
        lng: -38.523,
    };

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: '',
    });

    if (!isLoaded) return <div>...Loading</div>;

    return (
        isLoaded && (
            <div className="contact-area py-100">
                <div className="container">
                    <div className="contact-map-area">
                        <GoogleMap zoom={10} center={center}>
                            <Marker position={center} />
                        </GoogleMap>
                    </div>
                    <div className="contact-info">
                        <Row gutter={[32, 16]} >
                            <Col xs={8} lg={8} md={24} sm={24}>
                                <div className="contact-info-wrap">
                                    <div className="single-contact-info mb-40">
                                        <div className="contact-icon mr-20">
                                            <PhoneFilled className="sigle-contact-icon" />
                                        </div>
                                        <div className="contact-info-dec">
                                            <p>+012 345 678 102</p>
                                            <p>+012 345 678 102</p>
                                        </div>
                                    </div>
                                    <div className="single-contact-info mb-40">
                                        <div className="contact-icon mr-20">
                                            <GlobalOutlined className="sigle-contact-icon" />
                                        </div>
                                        <div className="contact-info-dec">
                                            <p>
                                                <ButtonComponent primaryHover className="pl-0 pr-0">
                                                    polyfood@store.com
                                                </ButtonComponent>
                                            </p>
                                            <p>
                                                <ButtonComponent primaryHover className="pl-0 pr-0">
                                                    polyfood.store
                                                </ButtonComponent>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single-contact-info mb-40">
                                        <div className="contact-icon mr-20">
                                            <EnvironmentFilled className="sigle-contact-icon" />
                                        </div>
                                        <div className="contact-info-dec">
                                            <p>Địa chỉ</p>
                                            <p>Đội Cấn, Ba Đình, Hà Nội</p>
                                        </div>
                                    </div>
                                    <div className="contact-socials mb-40 text-align-center">
                                        <h3>Theo dõi chúng tôi</h3>
                                        <div className="contact-social-icon-wrap">
                                            <ul className="d-flex justify-content-between">
                                                <li>
                                                    <ButtonComponent primaryHover className="pl-0 pr-0">
                                                        <FacebookOutlined className="contact-social-icon" />
                                                    </ButtonComponent>
                                                </li>
                                                <li>
                                                    <ButtonComponent primaryHover className="pl-0 pr-0">
                                                        <TwitterOutlined className="contact-social-icon" />
                                                    </ButtonComponent>
                                                </li>
                                                <li>
                                                    <ButtonComponent primaryHover className="pl-0 pr-0">
                                                        <LinkedinOutlined className="contact-social-icon" />
                                                    </ButtonComponent>
                                                </li>
                                                <li>
                                                    <ButtonComponent primaryHover className="pl-0 pr-0">
                                                        <InstagramOutlined className="contact-social-icon" />
                                                    </ButtonComponent>
                                                </li>
                                                <li>
                                                    <ButtonComponent primaryHover className="pl-0 pr-0">
                                                        <BehanceOutlined className="contact-social-icon" />
                                                    </ButtonComponent>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={16} lg={16} md={24} sm={24}>
                                <div className="contact-form">
                                    <h1 className="mb-10">LIÊN HỆ</h1>
                                    <div className="py-45">
                                        <Row gutter={[32, 32]}>
                                            <Col xs={12} lg={12} md={24} sm={24}>
                                                <Input placeholder="Họ & Tên*" size="large" />
                                            </Col>
                                            <Col xs={12} lg={12} md={24} sm={24}>
                                                <Input placeholder="Email*" size="large" />
                                            </Col>
                                            <Col xs={24} lg={24} md={24} sm={24}>
                                                <Input placeholder="Số điện thoại*" size="large" />
                                            </Col>
                                            <Col xs={24} lg={24} md={24} sm={24}>
                                                <TextArea placeholder="Nội dung*" rows={7} />
                                            </Col>
                                        </Row>
                                    </div>
                                    <ButtonComponent className="btn-submit-2 mt-10">GỬI</ButtonComponent>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    );
}

export default Contact;
