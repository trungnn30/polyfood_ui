import { useState } from 'react';
import ButtonComponent from '../Components/Button';
import './Cart.css';

import { ShoppingOutlined, CloseOutlined } from '@ant-design/icons';
import { Input, Row, Col } from 'antd';
import Swal from 'sweetalert2';

function CartArea() {
    const cartItems = JSON.parse(localStorage.getItem('carts'));
    const [carts, setCarts] = useState(cartItems || []);
    let [count, setCount] = useState(1);
    const increaseCount = () => {
        setCount(count + 1);
    };
    const decreaseCount = () => {
        setCount((count = count <= 1 ? 1 : count - 1));
    };
    const deleteCart = (id) => {
        setCarts((cart) => {
            let x = cart.filter((x) => x.id !== id);
            if (x.length === 0) {
                localStorage.removeItem('carts');
            } else {
                localStorage.setItem('carts', JSON.stringify(x));
            }
            return x;
        });
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
                Swal.fire('Thành công!', 'Đã xóa tất cả sản phẩm.', 'success');
                return localStorage.removeItem('carts');
            }
        });
    };
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
                                            <img src={cart.img} alt="" className="img-fluid" />
                                        </td>
                                        <td>
                                            <ButtonComponent primaryHover className="pl-0 pr-0">
                                                {cart.name}
                                            </ButtonComponent>
                                        </td>
                                        <td>{cart.price} VND</td>
                                        <td>
                                            <Input
                                                value={count}
                                                readOnly
                                                prefix={<button onClick={decreaseCount}>-</button>}
                                                suffix={<button onClick={increaseCount}>+</button>}
                                                style={{
                                                    width: '100px',
                                                    outline: 'none',
                                                }}
                                                size="large"
                                                className="cart-quantity"
                                            />
                                        </td>
                                        <td>{cart.price * count} VND</td>
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
                                <ButtonComponent onClick={deleteAll} className="shopping-action">
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
                                    <h5>
                                        Giá gốc
                                        <span></span>
                                    </h5>
                                    <h4 className="grand-total-title">
                                        Tổng cộng
                                        <span></span>
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
