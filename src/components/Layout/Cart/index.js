import { useMemo, useState, useContext } from 'react';
import { ShoppingOutlined, CloseOutlined } from '@ant-design/icons';
import { Input, Row, Col, notification } from 'antd';
import Swal from 'sweetalert2';

import ButtonComponent from '../Components/Button';
import './Cart.css';
import { CountContext } from '../Components/CountContext/CountContext';

function CartArea() {
    const value = useContext(CountContext);
    const cartItems = JSON.parse(localStorage.getItem('carts'));
    const [carts, setCarts] = useState(cartItems || []);
    const increaseCount = (id) => {
        setCarts((oldState) => {
            const cartIndex = oldState.findIndex((cart) => cart.id === id);
            if (cartIndex !== -1) {
                oldState[cartIndex].quantity = oldState[cartIndex].quantity + 1;
            }
            return [...oldState];
        });
        notification.success({
            placement: 'bottomLeft',
            message: 'Đã thêm sản phẩm vào giỏ hàng',
        });
    };
    const decreaseCount = (id) => {
        setCarts((oldState) => {
            const cartIndex = oldState.findIndex((cart) => cart.id === id);
            if (cartIndex !== -1) {
                oldState[cartIndex].quantity =
                    oldState[cartIndex].quantity <= 1
                        ? 1
                        : oldState[cartIndex].quantity - 1;
            }
            if (oldState[cartIndex].quantity > 1) {
                notification.warning({
                    placement: 'bottomLeft',
                    message: 'Đã xóa sản phẩm khỏi giỏ hàng',
                });
            }
            return [...oldState];
        });
    };
    const deleteCart = (id) => {
        setCarts((cart) => {
            let x = cart.filter((x) => x.id !== id);
            if (x.length === 0) {
                localStorage.removeItem('carts');
                localStorage.removeItem('addedCart');
            } else {
                localStorage.setItem('carts', JSON.stringify(x));
            }
            return x;
        });
        notification.warning({
            placement: 'bottomLeft',
            message: 'Đã xóa sản phẩm khỏi giỏ hàng',
        });
        value.setCountCart(value.countCart - 1);
    };
    const deleteAll = () => {
        Swal.fire({
            title: 'Bạn có muốn xóa hết hay không?',
            text: 'Bạn phải suy nghĩ thật kỹ!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Tôi đồng ý',
            cancelButtonText: 'Thôi',
        }).then((result) => {
            if (result.isConfirmed) {
                setCarts([]);
                value.setCountCart(0);
                Swal.fire(
                    'Thành công!',
                    'Đã xóa tất cả sản phẩm trong giỏ hàng.',
                    'success',
                );
                return (
                    localStorage.removeItem('addedCart')
                );
            }
        });
    };
    const totalNew = useMemo(() => {
        if (carts) {
            return carts.reduce((total, element) => {
                return total + element.price * element.quantity;
            }, 0);
        }
    }, [carts]);
    const totalOld = useMemo(() => {
        if (carts) {
            return carts.reduce((total, element) => {
                return total + element.oldPrice * element.quantity;
            }, 0);
        }
    }, [carts]);
    localStorage.setItem('carts', JSON.stringify(carts));
    console.log(cartItems);
    return (
        <div className="cart-area py-100">
            <div className="container">
                {carts.length > 0 && (
                    <>
                        <p>Các mặt hàng trong giỏ hàng của bạn</p>
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>ẢNH</th>
                                    <th>TÊN SẢN PHẨM</th>
                                    <th>ĐƠN GIÁ</th>
                                    <th>SỐ LƯỢNG</th>
                                    <th>TỔNG PHỤ</th>
                                    <th>HOẠT ĐỘNG</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carts.map((cart) => (
                                    <tr key={cart.id}>
                                        <td className="cart-img">
                                            <img
                                                src={cart.img}
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </td>
                                        <td>
                                            <ButtonComponent
                                                primaryHover
                                                className="pl-0 pr-0"
                                            >
                                                {cart.name}
                                            </ButtonComponent>
                                        </td>
                                        <td>{cart.price} VND</td>
                                        <td>
                                            <Input
                                                value={cart.quantity}
                                                readOnly
                                                prefix={
                                                    <button
                                                        onClick={() =>
                                                            decreaseCount(cart.id)
                                                        }
                                                    >
                                                        -
                                                    </button>
                                                }
                                                suffix={
                                                    <button
                                                        onClick={() =>
                                                            increaseCount(cart.id)
                                                        }
                                                    >
                                                        +
                                                    </button>
                                                }
                                                style={{
                                                    width: '100px',
                                                    outline: 'none',
                                                }}
                                                size="large"
                                                className="cart-quantity"
                                            />
                                        </td>
                                        <td>{cart.price * cart.quantity} VND</td>
                                        <td>
                                            <ButtonComponent
                                                onClick={() => deleteCart(cart.id)}
                                                primaryHover
                                                className="pl-0 pr-0"
                                            >
                                                <CloseOutlined />
                                            </ButtonComponent>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="shopping-update-wrap d-flex justify-content-between mt-40 mb-50">
                            <div className="shopping-update">
                                <ButtonComponent to={'/shop'} className="shopping-action">
                                    TIẾP TỤC MUA HÀNG
                                </ButtonComponent>
                            </div>
                            <div className="shopping-clear">
                                <ButtonComponent
                                    onClick={deleteAll}
                                    className="shopping-action"
                                >
                                    XÓA GIỎ HÀNG
                                </ButtonComponent>
                            </div>
                        </div>
                        <Row>
                            <Col xs={4} lg={4} md={24} sm={24}></Col>
                            <Col xs={12} lg={12} md={24} sm={24}></Col>
                            <Col xs={8} lg={8} md={24} sm={24}>
                                <div className="grand-total">
                                    <div className="title-wrap">
                                        <h4>Tổng giá giỏ hàng</h4>
                                    </div>
                                    <h5 className="d-flex justify-content-between">
                                        <span>Giá gốc</span>
                                        <span
                                            style={{
                                                textDecoration: 'line-through',
                                                color: '#ccc',
                                                fontSize: '18px',
                                            }}
                                        >
                                            {totalOld} VND
                                        </span>
                                    </h5>
                                    <h4 className="grand-total-title d-flex justify-content-between">
                                        <span>Tổng cộng</span>
                                        <span>{totalNew} VND</span>
                                    </h4>
                                    <ButtonComponent to={'/checkout'} primary2>
                                        Tiến hành kiểm tra
                                    </ButtonComponent>
                                </div>
                            </Col>
                        </Row>
                    </>
                )}

                {carts.length === 0 && (
                    <div className="empty text-align-center">
                        <ShoppingOutlined className="empty-icon" />
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

export default CartArea;
