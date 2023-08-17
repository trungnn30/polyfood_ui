import './BlogStandard.css';
import blogs from '../Blog';
import ButtonComponent from '../../Components/Button';

import { Col, Row } from 'antd';
import { FacebookFilled, TwitterCircleFilled, InstagramFilled, CommentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function BlogStandard() {
    return (
        <div className="blog-area py-100">
            <div className="container">
                <Row gutter={[32, 32]}>
                    {blogs.map((blog) => (
                        <Col xs={12} lg={12} md={24} sm={24} key={blog.id}>
                            <div className="blog-wrap">
                                <div className="blog-img">
                                    <Link to={`${blog.id}`}>
                                        <img src={blog.img} alt="" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <ul>
                                            <li>
                                                <p>{blog.date}</p>
                                            </li>
                                            <li>
                                                <p>{blog.poster}</p>
                                            </li>
                                            <li>
                                                <p>
                                                    {blog.comments}
                                                    <CommentOutlined />
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="mt-10 mb-20">
                                        <ButtonComponent primaryHover className="pl-0 pr-0 blog-title">
                                            {blog.title}
                                        </ButtonComponent>
                                    </h4>
                                    <div className="blog-share d-flex justify-content-between">
                                        <ButtonComponent primaryHover className="pl-0 pr-0">
                                            Đọc Ngay
                                        </ButtonComponent>
                                        <div className="blog-socials d-flex justify-content-between align-items-center">
                                            <span className="mr-10">Chia Sẻ: </span>
                                            <ul className="d-flex justify-content-between">
                                                <li className="mx-5">
                                                    <FacebookFilled className="blog-social-icon" />
                                                </li>
                                                <li className="mx-5">
                                                    <TwitterCircleFilled className="blog-social-icon" />
                                                </li>
                                                <li className="mx-5">
                                                    <InstagramFilled className="blog-social-icon" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default BlogStandard;
