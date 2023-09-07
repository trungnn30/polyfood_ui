import { useParams } from 'react-router-dom';
import { Col, Row, Tag, Input, Tabs, notification } from 'antd';
import { HeartOutlined, SwapOutlined } from '@ant-design/icons';
import { useState, useContext } from 'react';

import productItems from '../Product';
import './ProductDetails.css';
import ButtonComponent from '../../Components/Button';
import { CountContext } from '../../Components/CountContext/CountContext';

function ProductDetails() {
    const [isAddedCart, setIsAddedCart] = useState(JSON.parse(localStorage.getItem('addedCart')) || {});
    localStorage.setItem('addedCart', JSON.stringify(isAddedCart));

    const [isAddedWishList, setIsAddedWishList] = useState(
        JSON.parse(localStorage.getItem('addedWishList')) || {},
    );
    localStorage.setItem('addedWishList', JSON.stringify(isAddedWishList));

    const [isAddedCompare, setIsAddedCompare] = useState(
        JSON.parse(localStorage.getItem('addedCompare')) || {},
    );

    localStorage.setItem('addedCompare', JSON.stringify(isAddedCompare));
    const value = useContext(CountContext);
    let [count, setCount] = useState(1);
    const increaseCount = () => {
        setCount(count + 1);
    };
    const decreaseCount = () => {
        setCount((count = count <= 1 ? 1 : count - 1));
    };

    const { id } = useParams();
    const product = productItems.find((p) => parseInt(p.id) === parseInt(id));
    if (!product) {
        return (
            <div className="container py-100 text-align-center">
                <h1>Sản phẩm có id {id} không tồn tại</h1>
            </div>
        );
    }

    const handleAddToCompare = (id) => {
        var items = JSON.parse(localStorage.getItem('compare') || '[]');
        var item = productItems.find((product) => product.id === id);
        var itemExist = items.find((x) => x.id === item.id);
        if (!itemExist) {
            items.push(item);
            localStorage.setItem('compare', JSON.stringify(items));
            notification.success({
                placement: 'bottomLeft',
                message: 'Đã thêm vào mục so sánh',
            });
            value.setCountCompare(value.countCompare + 1);
        }
        const added = (x) => {
            setIsAddedCompare((added) => ({ ...added, [x.id]: x.id }));
        };
        added(item);
    };

    const handleAddToCart = (id) => {
        var items = JSON.parse(localStorage.getItem('carts') || '[]');
        var item = productItems.find((product) => product.id === id);
        var itemExist = items.find((x) => x.id === item.id);
        if (!itemExist) {
            items.push({ ...item, quantity: count });
            localStorage.setItem('carts', JSON.stringify(items));
            notification.success({
                placement: 'bottomLeft',
                message: 'Đã thêm vào giỏ hàng',
            });
            value.setCountCart(value.countCart + 1);
        }
        const added = (x) => {
            setIsAddedCart((added) => ({ ...added, [x.id]: x.id }));
        };
        added(item);
    };

    const handleAddToWishList = (id) => {
        var items = JSON.parse(localStorage.getItem('wishlist') || '[]');
        var item = productItems.find((product) => product.id === id);
        var itemExist = items.find((x) => x.id === item.id);
        if (!itemExist) {
            items.push(item);
            localStorage.setItem('compare', JSON.stringify(items));
            notification.success({
                placement: 'bottomLeft',
                message: 'Đã thêm vào mục yêu thích',
            });
            value.setCountCompare(value.countCompare + 1);
        }
        const added = (x) => {
            setIsAddedWishList((added) => ({ ...added, [x.id]: x.id }));
        };
        added(item);
    };

    return (
        <div className="product-detail-area">
            <div className="container">
                <div className="product-detail-wrap">
                    <div className="product-detail-content pt-100 pb-90">
                        <Row gutter={[32, 32]}>
                            <Col xs={12} lg={12} md={24} sm={24}>
                                <img src={product.img} alt="" />
                            </Col>
                            <Col xs={12} lg={12} md={24} sm={24}>
                                <div className="ml-70">
                                    <div
                                        style={{
                                            borderBottom: '1px solid #ccc',
                                        }}
                                    >
                                        <p className="product-detail-name">{product.name}</p>
                                        <p className="product-detail-price mt-16 mb-20">
                                            {product.price}
                                        </p>
                                        <p className="pb-20 mb-20">Mô tả</p>
                                    </div>
                                    <div className="product-detail-quality d-flex align-items-center">
                                        <div className="cart-minus-plus mt-20 mb-20 py-20">
                                            <Input
                                                value={count}
                                                readOnly
                                                prefix={<button onClick={decreaseCount}>-</button>}
                                                suffix={<button onClick={increaseCount}>+</button>}
                                                style={{
                                                    width: '80px',
                                                    outline: 'none',
                                                }}
                                                size="large"
                                            />
                                        </div>
                                        {!isAddedCart[product.id] && (
                                            <ButtonComponent
                                                primary
                                                className="add-to-cart mx-20"
                                                onClick={() => handleAddToCart(product.id)}
                                            >
                                                Thêm
                                            </ButtonComponent>
                                        )}
                                        {isAddedCart[product.id] && (
                                            <ButtonComponent
                                                primary
                                                className="add-to-cart mx-20 btn-disable"
                                            >
                                                Đã thêm
                                            </ButtonComponent>
                                        )}
                                        {!isAddedWishList[product.id] && (
                                            <ButtonComponent
                                                primaryHover
                                                className="pl-0 pr-0 mx-20"
                                                onClick={() => handleAddToWishList(product.id)}
                                            >
                                                <HeartOutlined />
                                            </ButtonComponent>
                                        )}
                                        {isAddedWishList[product.id] && (
                                            <ButtonComponent primaryHover className="pl-0 pr-0 mx-20">
                                                <HeartOutlined
                                                    style={{ color: 'var(--primary-color)' }}
                                                />
                                            </ButtonComponent>
                                        )}
                                        {!isAddedCompare[product.id] && (
                                            <ButtonComponent
                                                onClick={() => handleAddToCompare(product.id)}
                                                primaryHover
                                                className="pl-0 pr-0 mx-20"
                                            >
                                                <SwapOutlined />
                                            </ButtonComponent>
                                        )}
                                        {isAddedCompare[product.id] && (
                                            <ButtonComponent primaryHover className="pl-0 pr-0 mx-20">
                                                <SwapOutlined
                                                    style={{ color: 'var(--primary-color)' }}
                                                />
                                            </ButtonComponent>
                                        )}
                                    </div>
                                    <div className="product-detail-meta py-10">
                                        <span className="mr-5">Danh mục: </span>
                                        <ButtonComponent to={'/shop'} primaryHover className="pl-0 pr-0">
                                            {product.category}
                                        </ButtonComponent>
                                    </div>
                                    <div className="product-detail-meta py-10">
                                        <span className="mr-5">Nhãn: </span>
                                        <Tag>
                                            <ButtonComponent
                                                to={'/shop'}
                                                primaryHover
                                                className="pl-0 pr-0"
                                            >
                                                {product.tag}
                                            </ButtonComponent>
                                        </Tag>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="decription-review-area pb-90">
                        <div className="container">
                            <Tabs
                                centered
                                items={[
                                    {
                                        label: 'Mô tả chi tiết',
                                        key: '1',
                                        children: 'Mô tả',
                                    },
                                    {
                                        label: 'Đánh giá',
                                        key: '2',
                                        children: 'Đánh giá',
                                    },
                                ]}
                                size="large"
                            />
                        </div>
                    </div>
                    <div className="related-product-area">
                        <div className="related-product-wrap">
                            <div className="section-title text-align-center pb-90">
                                <h1 className="text-align-center">Sản phẩm liên quan</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
