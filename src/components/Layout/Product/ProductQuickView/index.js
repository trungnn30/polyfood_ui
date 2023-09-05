import { Col, Row, Input, notification, Tag } from 'antd';
import { useContext, useState } from 'react';

import ButtonComponent from '../../Components/Button';
import { HeartOutlined, SwapOutlined } from '@ant-design/icons';
import { CountContext } from '../../Components/CountContext/CountContext';

function Productproduct({ products, product, decreaseCount, increaseCount, count }) {
    const value = useContext(CountContext);

    const [isAddedCart, setIsAddedCart] = useState(
        JSON.parse(localStorage.getItem('addedCart')) || {},
    );

    const [isAddedWishList, setIsAddedWishList] = useState(
        JSON.parse(localStorage.getItem('addedWishList')) || {},
    );

    const [isAddedCompare, setIsAddedCompare] = useState(
        JSON.parse(localStorage.getItem('addedCompare')) || {},
    );

    const handleAddToCartFromQuickView = (id) => {
        var items = JSON.parse(localStorage.getItem('carts') || '[]');
        var item = products.find((product) => product.id === id);
        if (item) {
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

    const handleAddToCompare = (id) => {
        var items = JSON.parse(localStorage.getItem('compare') || '[]');
        var item = products.find((product) => product.id === id);
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

    const handleAddToWishList = (id) => {
        var items = JSON.parse(localStorage.getItem('wishlist') || '[]');
        var item = products.find((product) => product.id === id);
        var itemExist = items.find((x) => x.id === item.id);
        if (!itemExist) {
            items.push(item);
            localStorage.setItem('wishlist', JSON.stringify(items));
            notification.success({
                placement: 'bottomLeft',
                message: 'Đã thêm vào mục yêu thích',
            });
            value.setCountWishList(value.countWishList + 1);
        }
        const added = (x) => {
            setIsAddedWishList((added) => ({ ...added, [x.id]: x.id }));
        };
        added(item);
    };

    localStorage.setItem('addedCart', JSON.stringify(isAddedCart));
    localStorage.setItem('addedWishList', JSON.stringify(isAddedWishList));
    localStorage.setItem('addedCompare', JSON.stringify(isAddedCompare));
    console.log(JSON.parse(localStorage.getItem('addedCart')));

    return (
        <div className="quick-view-area">
            <Row gutter={[32, 32]}>
                <Col xs={12} lg={12} md={24} sm={24}>
                    <img src={product.img} alt="" style={{ width: '100%' }} />
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
                                    onClick={() =>
                                        handleAddToCartFromQuickView(product.id)
                                    }
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
                                    onClick={() => handleAddToWishList(product.id)}
                                    primaryHover
                                    className="pl-0 pr-0 mx-20"
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
                            <ButtonComponent
                                to={'/shop'}
                                primaryHover
                                className="pl-0 pr-0"
                            >
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
    );
}

export default Productproduct;
