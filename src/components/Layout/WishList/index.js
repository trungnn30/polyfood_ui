import { useState, useContext } from 'react';
import { HeartOutlined, CloseOutlined } from '@ant-design/icons';
import { notification } from 'antd/lib';

import ButtonComponent from '../Components/Button';
import './WishList.css';
import { CountContext } from '../Components/CountContext/CountContext';

function WishListArea() {
    const value = useContext(CountContext);
    const wishListItems = JSON.parse(localStorage.getItem('wishlist'));
    const [wishList, setWishList] = useState(wishListItems || []);
    const deleteWishList = (id) => {
        setWishList((wishList) => {
            let x = wishList.filter((x) => x.id !== id);
            if (x.length === 0) {
                localStorage.removeItem('wishlist');
            } else {
                localStorage.setItem('wishlist', JSON.stringify(x));
            }
            return x;
        });
        notification.warning({
            placement: 'bottomLeft',
            message: 'Đã xóa sản phẩm yêu thích',
        });
        value.setCountWishList(value.countWishList - 1);
    };
    const deleteAll = () => {
        setWishList([]);
        value.setCountWishList(0);
        notification.warning({
            placement: 'bottomLeft',
            message: 'Đã xóa hết sản phẩm yêu thích',
        });
        return localStorage.removeItem('wishlist');
    };
    return (
        <div className="wish-list-area py-100">
            <div className="container">
                {wishList.length > 0 && (
                    <>
                        <p>Sản phẩm yêu thích của bạn</p>
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>ẢNH</th>
                                    <th>TÊN SẢN PHẨM</th>
                                    <th>ĐƠN GIÁ</th>
                                    <th>MUA HÀNG</th>
                                    <th>HOẠT ĐỘNG</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishList.map((item) => (
                                    <tr key={item.id}>
                                        <td className="cart-img">
                                            <img
                                                src={item.img}
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </td>
                                        <td>
                                            <ButtonComponent
                                                primaryHover
                                                className="pl-0 pr-0"
                                            >
                                                {item.name}
                                            </ButtonComponent>
                                        </td>
                                        <td>{item.price}</td>
                                        <td>
                                            <ButtonComponent className="btn-add-to-cart">
                                                THÊM
                                            </ButtonComponent>
                                        </td>
                                        <td>
                                            <ButtonComponent
                                                onClick={() => deleteWishList(item.id)}
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
                        <div className="shopping-update-wrap d-flex justify-content-between mt-40">
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
                                    XÓA HẾT
                                </ButtonComponent>
                            </div>
                        </div>
                    </>
                )}
                {wishList.length === 0 && (
                    <div className="empty text-align-center">
                        <HeartOutlined className="empty-icon" />
                        <p>Không có sản phẩm yêu thích</p>
                        <ButtonComponent to={'/shop'} className="btn-add-empty mt-40">
                            Thêm sản phẩm yêu thích
                        </ButtonComponent>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WishListArea;
