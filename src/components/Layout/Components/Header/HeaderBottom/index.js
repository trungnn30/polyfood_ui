import { Input, Col, Row, Popover, Badge } from 'antd';
import { SearchOutlined, UserOutlined, HeartOutlined, ShoppingOutlined, SwapOutlined } from '@ant-design/icons';
import ButtonComponent from '../../../Components/Button';
import NavHeader from '../../../Components/NavHeader';
import './HeaderBottom.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { Search } = Input;

function HeaderBottom() {
    const [count, setCount] = useState(0);
    return (
        <div className="header-bottom mt-5">
            <div className="header-bottom-wrap">
                <Row className="align-items-center">
                    <Col xs={4} lg={4} md={24} sm={24}>
                        <div className="header-img">
                            <Link to={'/'}>
                                <img src="/assets/img/GSlogo.png" alt="" />
                            </Link>
                        </div>
                    </Col>
                    <Col xs={16} lg={16} md={24} sm={24}>
                        <NavHeader />
                    </Col>
                    <Col xs={4} lg={4} md={24} sm={24}>
                        <div>
                            <nav>
                                <ul className="header-right-wrap">
                                    <li className="px-10">
                                        <Popover
                                            content={
                                                <Search
                                                    placeholder="Nhập mã đơn hàng..."
                                                    allowClear
                                                    enterButton
                                                    size="large"
                                                />
                                            }
                                            trigger="click"
                                            placement="bottomRight"
                                        >
                                            <ButtonComponent primaryHover className="pr-0 pl-0">
                                                <SearchOutlined className="icon" />
                                            </ButtonComponent>
                                        </Popover>
                                    </li>
                                    <li className="px-10">
                                        <Popover
                                            content={
                                                <ButtonComponent primaryHover to={'/login-register'}>
                                                    Đăng nhập
                                                </ButtonComponent>
                                            }
                                            trigger="click"
                                            placement="bottomRight"
                                        >
                                            <ButtonComponent primaryHover className="pr-0 pl-0">
                                                <UserOutlined className="icon" />
                                            </ButtonComponent>
                                        </Popover>
                                    </li>
                                    <li className="px-10">
                                        <Badge showZero count={count}>
                                            <ButtonComponent to={'/compare'} primaryHover className="pr-0 pl-0">
                                                <SwapOutlined className="icon" />
                                            </ButtonComponent>
                                        </Badge>
                                    </li>
                                    <li className="px-10">
                                        <Badge showZero count={count}>
                                            <ButtonComponent to={'/wishlist'} primaryHover className="pr-0 pl-0">
                                                <HeartOutlined className="icon" />
                                            </ButtonComponent>
                                        </Badge>
                                    </li>
                                    <li className="px-10 pr-0">
                                        <Badge showZero count={count}>
                                            <ButtonComponent to={'/cart'} primaryHover className="pr-0 pl-0">
                                                <ShoppingOutlined className="icon" />
                                            </ButtonComponent>
                                        </Badge>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default HeaderBottom;
