import ButtonComponent from '../../Components/Button';
import './ProductRender.css';

import { HeartOutlined } from '@ant-design/icons';
import { Col, Row, Rate, notification } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

function ProductRender({ products }) {
    // const [api, contextHolder] = notification.useNotification();
    // let [countCart, setCountCart] = useState(JSON.parse(localStorage.getItem('countCart' || 0)));
    // let [countWishList, setCountWishList] = useState(JSON.parse(localStorage.getItem('countWishList' || 0)));
    // localStorage.setItem('countCart', countCart);
    // localStorage.setItem('countWishList', countWishList);

    const handleAddToCart = (id) => {
        var items = JSON.parse(localStorage.getItem('carts') || '[]');
        var item = products.find((product) => product.id === id);
        items.push(item);
        localStorage.setItem('carts', JSON.stringify(items));
        // setCountCart(countCart + 1);
        notification.success({
            placement: 'bottomLeft',
            message: 'Đã thêm vào giỏ hàng',
        });
    };

    const handleAddToWishList = (id) => {
        var items = JSON.parse(localStorage.getItem('wishlist') || '[]');
        var item = products.find((product) => product.id === id);
        items.push(item);
        localStorage.setItem('wishlist', JSON.stringify(items));
        // setCountWishList(countWishList + 1);
        notification.success({
            placement: 'bottomLeft',
            message: 'Đã thêm vào mục yêu thích',
        });
    };
    return (
        <Row gutter={[32, 32]} className="text-align-center">
            {products.map((product) => (
                <Col xs={8} lg={8} md={8} sm={8} key={product.id}>
                    <div className="product-shop-wrap">
                        <div className="product-img">
                            <Link to={`${product.id}`}>
                                <img src={product.img} alt="" className="default-img" />
                            </Link>
                            <div className="product-action">
                                <Row>
                                    <Col xs={4} lg={4} md={4} sm={4}>
                                        <div className="product-same-action product-wishlist">
                                            <ButtonComponent
                                                onClick={() =>
                                                    handleAddToWishList(product.id)
                                                }
                                                productAction
                                                className="pl-0 pr-0"
                                            >
                                                <HeartOutlined />
                                            </ButtonComponent>
                                        </div>
                                    </Col>
                                    <Col xs={16} lg={16} md={16} sm={16}>
                                        <div className="product-same-action product-cart">
                                            <ButtonComponent
                                                onClick={() =>
                                                    handleAddToCart(product.id)
                                                }
                                                productAction
                                                className="pl-0 pr-0"
                                            >
                                                <ShoppingCartOutlined className="mr-5" />
                                                <span>Thêm vào giỏ hàng</span>
                                            </ButtonComponent>
                                        </div>
                                    </Col>
                                    <Col xs={4} lg={4} md={4} sm={4}>
                                        <div className="product-same-action product-quick-view">
                                            <ButtonComponent
                                                productAction
                                                className="pl-0 pr-0"
                                            >
                                                <EyeOutlined />
                                            </ButtonComponent>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="product-badges">
                                <span> - {product.sale}</span>
                            </div>
                        </div>

                        <div className="product-content">
                            <h3>
                                <ButtonComponent
                                    primaryHover
                                    className="pl-0 pr-0 pt-20 pb-10 product-name"
                                >
                                    {product.name}
                                </ButtonComponent>
                            </h3>
                            <div className="product-price mb-6">
                                <span className="new-price">{product.price} VND</span>
                                <span className="old-price">{product.oldPrice} VND</span>
                            </div>
                            <div className="product-rating pb-20">
                                <Rate disabled defaultValue={product.rate} />
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    );
}

export default ProductRender;
