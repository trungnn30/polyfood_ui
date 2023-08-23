import ButtonComponent from '../Components/Button';
import './Compare.css';

import { Rate } from 'antd/lib';
import { SwapOutlined } from '@ant-design/icons';

function CompareArea() {
    const compareItems = JSON.parse(localStorage.getItem('compare'));
    return (
        <div className="compare-area py-100">
            <div className="container">
                {compareItems !== null && (
                    <>
                        <table className="compare-area-table">
                            <tbody>
                                <tr>
                                    <td className="title-column">Thông tin sản phẩm</td>
                                    {compareItems.map((item) => (
                                        <td key={item.id} className="compare-img-title text-align-center">
                                            <div>
                                                <div className="compare-img">
                                                    <img src={item.img} alt={item.name} className="img-fluid" />
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
                                    {compareItems.map((item) => (
                                        <td key={item.id}>{item.price}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="title-column">Mô tả</td>
                                    {compareItems.map((item) => (
                                        <td key={item.id}>{item.sale}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="title-column">Đánh giá</td>
                                    {compareItems.map((item) => (
                                        <td key={item.id}>
                                            <Rate disabled defaultValue={item.rate} />
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </>
                )}
                {compareItems === null && (
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
