import ButtonComponent from '../../../Components/Button';
import NavHeader from '../../../Components/NavHeader';
import './HeaderBottom.css';
import { CountContext } from '../../CountContext/CountContext';

import { Link } from 'react-router-dom';
import { useContext, useState, useMemo } from 'react';
import { Input, Col, Row, Popover, Badge } from 'antd';
import {
    SearchOutlined,
    UserOutlined,
    HeartOutlined,
    ShoppingOutlined,
    SwapOutlined,
} from '@ant-design/icons';

const { Search } = Input;

function HeaderBottom() {
    const value = useContext(CountContext);
    const cartItems = JSON.parse(localStorage.getItem('carts') || '[]');
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    };
    const total = useMemo(() => {
        if (cartItems) {
            return cartItems.reduce((total, element) => {
                return total + element.price * element.quantity;
            }, 0);
        }
    }, [cartItems]);
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
                                            <ButtonComponent
                                                primaryHover
                                                className="pr-0 pl-0"
                                            >
                                                <SearchOutlined className="icon" />
                                            </ButtonComponent>
                                        </Popover>
                                    </li>
                                    <li className="px-10">
                                        <Popover
                                            content={
                                                <ButtonComponent
                                                    primaryHover
                                                    to={'/login-register'}
                                                >
                                                    Đăng nhập
                                                </ButtonComponent>
                                            }
                                            trigger="click"
                                            placement="bottomRight"
                                        >
                                            <ButtonComponent
                                                primaryHover
                                                className="pr-0 pl-0"
                                            >
                                                <UserOutlined className="icon" />
                                            </ButtonComponent>
                                        </Popover>
                                    </li>
                                    <li className="px-10">
                                        <Badge showZero count={value.countCompare}>
                                            <ButtonComponent
                                                to={'/compare'}
                                                primaryHover
                                                className="pr-0 pl-0"
                                            >
                                                <SwapOutlined className="icon" />
                                            </ButtonComponent>
                                        </Badge>
                                    </li>
                                    <li className="px-10">
                                        <Badge showZero count={value.countWishList}>
                                            <ButtonComponent
                                                to={'/wishlist'}
                                                primaryHover
                                                className="pr-0 pl-0"
                                            >
                                                <HeartOutlined className="icon" />
                                            </ButtonComponent>
                                        </Badge>
                                    </li>
                                    <li className="px-10 pr-0">
                                        <Badge showZero count={value.countCart}>
                                            <ButtonComponent
                                                // to={'/cart'}
                                                primaryHover
                                                className="pr-0 pl-0"
                                                onClick={handleShow}
                                            >
                                                <ShoppingOutlined className="icon" />
                                            </ButtonComponent>
                                            {show && (
                                                <div className="menu menu-active">
                                                    {cartItems.length === 0 && (
                                                        <div className='text-align-center'>
                                                            <p>
                                                                Không có sản phẩm trong
                                                                giỏ hàng
                                                            </p>
                                                        </div>
                                                    )}
                                                    {cartItems.length > 0 && (
                                                        <div>
                                                            <ul>
                                                                {cartItems.map((cart) => (
                                                                    <li
                                                                        key={cart.id}
                                                                        className="single-shopping-cart d-flex"
                                                                    >
                                                                        <div className="shopping-cart-img">
                                                                            <img
                                                                                src={
                                                                                    cart.img
                                                                                }
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="shopping-cart-title">
                                                                            <h4>
                                                                                {
                                                                                    cart.name
                                                                                }
                                                                            </h4>
                                                                            <h6>
                                                                                Số lượng:{' '}
                                                                                {
                                                                                    cart.quantity
                                                                                }{' '}
                                                                                món
                                                                            </h6>
                                                                            <span>
                                                                                {cart.price *
                                                                                    cart.quantity}{' '}
                                                                                VND
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            <div className="d-flex justify-content-between">
                                                                <span>Tổng giá:</span>
                                                                <span>{total} VND</span>
                                                            </div>
                                                            <div className="mt-25">
                                                                <ButtonComponent
                                                                    to={'/cart'}
                                                                    className="default-btn"
                                                                >
                                                                    XEM GIỎ HÀNG
                                                                </ButtonComponent>
                                                                <ButtonComponent
                                                                    to={'/checkout'}
                                                                    className="default-btn"
                                                                >
                                                                    THANH TOÁN
                                                                </ButtonComponent>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
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
