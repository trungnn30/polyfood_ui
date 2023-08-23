import ButtonComponent from '../Components/Button';
import './WishList.css';

import { HeartOutlined, CloseOutlined } from '@ant-design/icons';

function WishListArea() {
    const wishListItems = JSON.parse(localStorage.getItem('wishlist'));
    return (
        <div className="wish-list-area py-100">
            <div className="container">
                {wishListItems !== null && (
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
                                {wishListItems.map((item) => (
                                    <tr key={item.id}>
                                        <td className="cart-img">
                                            <img src={item.img} alt="" className="img-fluid" />
                                        </td>
                                        <td>
                                            <ButtonComponent primaryHover className="pl-0 pr-0">
                                                {item.name}
                                            </ButtonComponent>
                                        </td>
                                        <td>{item.price}</td>
                                        <td></td>
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
                                <ButtonComponent className="shopping-action">XÓA HẾT</ButtonComponent>
                            </div>
                        </div>
                    </>
                )}
                {wishListItems === null && (
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
