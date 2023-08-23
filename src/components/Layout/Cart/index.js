import ButtonComponent from '../Components/Button';
import './Cart.css';

import { ShoppingOutlined, CloseOutlined } from '@ant-design/icons';

function CartArea() {
    const carts = JSON.parse(localStorage.getItem('carts'));
    return (
        <div className="cart-area py-100">
            <div className="container">
                {carts !== null && (
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
                                        <td>{cart.price}</td>
                                        <td>{cart.sales}</td>
                                        <td>{cart.price}</td>
                                        <td>
                                            <ButtonComponent primaryHover className="pl-0 pr-0">
                                                <CloseOutlined />
                                            </ButtonComponent>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="shopping-update-wrap d-flex justify-content-between mt-40">
                            <div className="shopping-update">
                                <ButtonComponent to={'/shop'} className="shopping-action">
                                    TIẾP TỤC MUA HÀNG
                                </ButtonComponent>
                            </div>
                            <div className="shopping-clear">
                                <ButtonComponent className="shopping-action">XÓA GIỎ HÀNG</ButtonComponent>
                            </div>
                        </div>
                    </>
                )}

                {carts === null && (
                    <div className="empty text-align-center">
                        <ShoppingOutlined className="empty-icon" />
                        <p>Không có sản phẩm yêu thích</p>
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
