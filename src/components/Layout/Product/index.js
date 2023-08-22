import { Col, Row } from 'antd';
import { useMemo, useState } from 'react';
import { Space, Radio, Input } from 'antd';

import productItems from './Product';
import Pagination from '../Components/Pagination';
import './Product.css';
const { Search } = Input;

function Product() {
    let [filterData, setFilterData] = useState();
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
    const tags = [
        {
            id: 1,
            value: 'Tất Cả Danh Mục',
        },
        {
            id: 2,
            value: 'Món Chay Mặn',
        },
        {
            id: 3,
            value: 'Hàng Chay Cấp Đông',
        },
        {
            id: 4,
            value: 'Món Nộm',
        },
        {
            id: 5,
            value: 'Món Cơm',
        },
    ];

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
        setProduct(filterData);
    };

    const getFilteredList = () => {
        if (!filterData || filterData === 'Tất Cả Danh Mục') {
            return products;
        }
        return products.filter((product) => product.tag === filterData);
    };

    var filteredList = useMemo(getFilteredList, [filterData, products]);

    const handleClick = (e) => {
        setFilterData(e.target.value);
    };

    return (
        <div className="product-area py-100">
            <div className="container">
                <div className="product-wrap">
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
                                    <Radio.Group onChange={handleClick} className="mb-50 mt-25">
                                        <Space direction="vertical">
                                            {options.map((option, id) => (
                                                <Radio key={id} value={option.value}>{option.value}</Radio>
                                            ))}
                                        </Space>
                                    </Radio.Group>
                                </div>
                                <div className="sidebar-widget">
                                    <p>Nhãn</p>
                                    <ul className="mb-50 mt-25">
                                        {tags.map((tag) => (
                                            <li key={tag.id}>
                                                <input
                                                    type="button"
                                                    value={tag.value}
                                                    onClick={handleClick}
                                                    className="tag"
                                                />
                                                {/* <ButtonComponent tag onClick={handleClick} value={tag.value}>
                                                    {tag.value}
                                                </ButtonComponent> */}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={18}>
                            <Pagination itemsPerPage={9} products={filteredList} />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Product;
