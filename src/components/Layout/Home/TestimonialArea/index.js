import './TestimonialArea.css';
import { Col, Row } from 'antd';
import TestimonialSwiper from '../Swiper/TestimonialSwiper';

function TestimonialArea() {
    return (
        <div className="testimonial-area py-45">
            <div
                style={{
                    background: '#f7f7f7',
                    padding: '100px 0 95px',
                }}
            >
                <Row>
                    <Col xs={14} lg={14} md={14} sm={14} className="mx-auto text-align-center">
                        <TestimonialSwiper />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default TestimonialArea;
