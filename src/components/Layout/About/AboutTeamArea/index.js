import './AboutTeamArea.css';
import { Col, Row } from 'antd';
import { FacebookFilled, TwitterCircleFilled, InstagramFilled } from '@ant-design/icons';

function AboutTeamArea() {
    return (
        <div className="container">
            <div className="about-team-area text-align-center py-45">
                <h1 className="py-20">Thành viên nhóm</h1>
                <Row className="py-45" gutter={[32, 32]}>
                    <Col xs={6} lg={6} md={24} sm={24}>
                        <div className="about-team-wrap">
                            <div className="team-img">
                                <img src="./assets/img/psyduck.jpg" alt="" className="about-team-img" />
                            </div>
                            <div>
                                <p>Lê Văn Thuận</p>
                            </div>
                            <div className="team-action text-align-center py-10">
                                <FacebookFilled className="team-action-icon mx-5" />
                                <TwitterCircleFilled className="team-action-icon mx-5" />
                                <InstagramFilled className="team-action-icon mx-5" />
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} lg={6} md={24} sm={24}>
                        <div className="about-team-wrap">
                            <div className="team-img">
                                <img src="./assets/img/psyduck.jpg" alt="" className="about-team-img" />
                            </div>
                            <div>
                                <p>Lê Văn Thuận</p>
                            </div>
                            <div className="team-action text-align-center py-10">
                                <FacebookFilled className="team-action-icon mx-5" />
                                <TwitterCircleFilled className="team-action-icon mx-5" />
                                <InstagramFilled className="team-action-icon mx-5" />
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} lg={6} md={24} sm={24}>
                        <div className="about-team-wrap">
                            <div className="team-img">
                                <img src="./assets/img/psyduck.jpg" alt="" className="about-team-img" />
                            </div>
                            <div>
                                <p>Lê Văn Thuận</p>
                            </div>
                            <div className="team-action text-align-center py-10">
                                <FacebookFilled className="team-action-icon mx-5" />
                                <TwitterCircleFilled className="team-action-icon mx-5" />
                                <InstagramFilled className="team-action-icon mx-5" />
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} lg={6} md={24} sm={24}>
                        <div className="about-team-wrap">
                            <div className="team-img">
                                <img src="./assets/img/psyduck.jpg" alt="" className="about-team-img" />
                            </div>
                            <div>
                                <p>Lê Văn Thuận</p>
                            </div>
                            <div className="team-action text-align-center py-10">
                                <FacebookFilled className="team-action-icon mx-5" />
                                <TwitterCircleFilled className="team-action-icon mx-5" />
                                <InstagramFilled className="team-action-icon mx-5" />
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} lg={6} md={24} sm={24}>
                        <div className="about-team-wrap">
                            <div className="team-img">
                                <img src="./assets/img/psyduck.jpg" alt="" className="about-team-img" />
                            </div>
                            <div>
                                <p>Lê Văn Thuận</p>
                            </div>
                            <div className="team-action text-align-center py-10">
                                <FacebookFilled className="team-action-icon mx-5" />
                                <TwitterCircleFilled className="team-action-icon mx-5" />
                                <InstagramFilled className="team-action-icon mx-5" />
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} lg={6} md={24} sm={24}>
                        <div className="about-team-wrap">
                            <div className="team-img">
                                <img src="./assets/img/psyduck.jpg" alt="" className="about-team-img" />
                            </div>
                            <div>
                                <p>Lê Văn Thuận</p>
                            </div>
                            <div className="team-action text-align-center py-10">
                                <FacebookFilled className="team-action-icon mx-5" />
                                <TwitterCircleFilled className="team-action-icon mx-5" />
                                <InstagramFilled className="team-action-icon mx-5" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AboutTeamArea;
