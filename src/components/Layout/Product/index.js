import './Product.css';
import { Col, Row } from 'antd';
import productItems from './Product';
import { useState } from 'react';
import Pagination from '../Components/Pagination';
import ButtonComponent from '../Components/Button';
import { Space, Checkbox, Input } from 'antd';
import './ProductSideBar/ProductSideBar.css';
const { Search } = Input;

function Product() {
    const [products, setProduct] = useState(productItems);
    const [search, setSearch] = useState('');
    const options = [
        {
            label: 'Tất Cả Danh Mục',
            value: 'Tất Cả Danh Mục',
        },
        {
            label: 'Món Chay Mặn',
            value: 'Món Chay Mặn',
        },
        {
            label: 'Hàng Chay Cấp Đông',
            value: 'Hàng Chay Cấp Đông',
        },
        {
            label: 'Món Nộm',
            value: 'Món Nộm',
        },
        {
            label: 'Món Cơm',
            value: 'Món Cơm',
        },
    ];
    const onChange = (values) => {
        console.log('checked = ', values);
    };
    let [filterData] = useState();
    const handleChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value === '') {
            setProduct(productItems);
        }
    };
    const handleSearch = () => {
        filterData = products.filter((value) => {
            return value.name.toLowerCase().includes(search.toLocaleLowerCase());
        });
        console.log(filterData);
        setProduct(filterData);
    };
    return (
        <div className="product-area">
            <div className="container">
                <div className="product-wrap pt-100 pb-70">
                    <Row>
                        <Col xs={6}>
                            <div className="sidebar">
                                <div className="sidebar-widget">
                                    <p>Tìm kiếm sản phẩm</p>
                                    <div className="sidebar-search mb-50 mt-25">
                                        <Space direction="vertical">
                                            <Search
                                                onChange={handleChange}
                                                onSearch={handleSearch}
                                                placeholder="Nhập tên sản phẩm"
                                                allowClear
                                                size="large"
                                            />
                                        </Space>
                                    </div>
                                </div>
                                <div className="sidebar-widget">
                                    <p>Theo Danh Mục</p>
                                    <Checkbox.Group options={options} onChange={onChange} className="mb-50 mt-25" />
                                </div>
                                <div className="sidebar-widget">
                                    <p>Nhãn</p>
                                    <ul className="mb-50 mt-25">
                                        <li>
                                            <ButtonComponent tag>Món Chay Mặn</ButtonComponent>
                                        </li>
                                        <li>
                                            <ButtonComponent tag>Hàng Chay Cấp Đông</ButtonComponent>
                                        </li>
                                        <li>
                                            <ButtonComponent tag>Món Nộm</ButtonComponent>
                                        </li>
                                        <li>
                                            <ButtonComponent tag>Món Cơm</ButtonComponent>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={18}>
                            <Pagination itemsPerPage={9} products={products} />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Product;
