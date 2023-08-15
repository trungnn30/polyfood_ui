import ButtonComponent from '../../Components/Button';
import './ProductShop.css';
import { Col, Row, Select } from 'antd';
import { UnorderedListOutlined, AppstoreOutlined, TableOutlined, StarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function ProductShop({ products }) {
    const items = [
        {
            key: '1',
            label: 'Mặc định',
            value: 'Mặc định',
        },
        {
            key: '2',
            label: 'Giá từ thấp đến cao',
            value: 'Giá từ thấp đến cao',
        },
        {
            key: '3',
            lable: 'Giá từ cao đến thấp',
            value: 'Giá từ cao đến thấp',
        },
    ];
    return (
        <div className="shop-area">
            <div className="shop-top-wrap mb-40">
                <div className="shop-top-bar d-flex justify-content-between">
                    <div className="select-shopping-wrap d-flex justify-content-between align-items-center">
                        <div className="shop-select">
                            <Select
                                labelInValue
                                defaultValue={items[0]}
                                options={items}
                                style={{
                                    width: '170px',
                                }}
                            />
                        </div>
                        <p>9 / 25 sản phẩm</p>
                    </div>
                    <div className="shop-tab">
                        <ButtonComponent primaryHover className="pl-0 pr-0">
                            <TableOutlined className="tab-icon mx-5" />
                        </ButtonComponent>

                        <ButtonComponent primaryHover className="pl-0 pr-0">
                            <AppstoreOutlined className="tab-icon mx-5" />
                        </ButtonComponent>

                        <ButtonComponent primaryHover className="pl-0 pr-0">
                            <UnorderedListOutlined className="tab-icon mx-5" />
                        </ButtonComponent>
                    </div>
                </div>
            </div>
            <div className="shop-bot-wrap">
                <Row gutter={[32, 32]} className="text-align-center">
                    {products.map((product) => (
                        <Col xs={8} lg={8} md={24} sm={24} key={product.id}>
                            <div className="product-img">
                                <Link to={`${product.id}`}>
                                    <img src={product.img} alt="" className="default-img" />
                                </Link>
                            </div>
                            <div className="product-content">
                                <h3>
                                    <ButtonComponent primaryHover className="pl-0 pr-0 pt-20 pb-10 product-name">
                                        {product.name}
                                    </ButtonComponent>
                                </h3>
                                <div className="product-price mb-6">
                                    <span className="new-price">{product.price}</span>
                                    <span></span>
                                </div>
                                <div className="product-rating">
                                    <StarOutlined className="rating-icon mx-3" />
                                    <StarOutlined className="rating-icon mx-3" />
                                    <StarOutlined className="rating-icon mx-3" />
                                    <StarOutlined className="rating-icon mx-3" />
                                    <StarOutlined className="rating-icon mx-3" />
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default ProductShop;
