import ButtonComponent from '../Components/Button';
import './Compare.css';
import { CountContext } from '../Components/CountContext/CountContext';

import { Rate } from 'antd/lib';
import { SwapOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState, useContext } from 'react';
import { notification } from 'antd/lib';

function CompareArea() {
    const value = useContext(CountContext);
    const compareItems = JSON.parse(localStorage.getItem('compare'));
    const [compares, setCompare] = useState(compareItems || []);
    const deleteCompare = (id) => {
        setCompare((compare) => {
            let x = compare.filter((x) => x.id !== id);
            if (x.length === 0) {
                localStorage.removeItem('compare');
            } else {
                localStorage.setItem('compare', JSON.stringify(x));
            }
            return x;
        });
        notification.warning({
            placement: 'bottomLeft',
            message: 'Đã xóa sản phẩm so sánh',
        });
        value.setCountWishList(value.countWishList - 1);
    };
    return (
        <div className="compare-area py-100">
            <div className="container">
                {compares.length > 0 && (
                    <>
                        <table className="compare-area-table">
                            <tbody>
                                <tr>
                                    <td className="title-column">Thông tin sản phẩm</td>
                                    {compares.map((item) => (
                                        <td
                                            key={item.id}
                                            className="compare-img-title text-align-center"
                                        >
                                            <div>
                                                <div>
                                                    <ButtonComponent
                                                        onClick={() =>
                                                            deleteCompare(item.id)
                                                        }
                                                        primaryHover
                                                        className="pl-0 pr-0 font-size-25"
                                                    >
                                                        <DeleteOutlined />
                                                    </ButtonComponent>
                                                </div>
                                                <div className="compare-img">
                                                    <img
                                                        src={item.img}
                                                        alt={item.name}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="compare-product-title">
                                                    <p>{item.name}</p>
                                                </div>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="title-column">Giá</td>
                                    {compares.map((item) => (
                                        <td key={item.id}>{item.price}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="title-column">Mô tả</td>
                                    {compares.map((item) => (
                                        <td key={item.id}>{item.sale}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="title-column">Đánh giá</td>
                                    {compares.map((item) => (
                                        <td key={item.id}>
                                            <Rate disabled defaultValue={item.rate} />
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </>
                )}
                {compares.length === 0 && (
                    <div className="empty text-align-center">
                        <SwapOutlined className="empty-icon" />
                        <p>Không có sản phẩm yêu thích</p>
                        <ButtonComponent to={'/shop'} className="btn-add-empty mt-40">
                            Thêm sản phẩm so sánh
                        </ButtonComponent>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CompareArea;
