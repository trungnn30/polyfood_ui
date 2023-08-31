import ButtonComponent from '../../Components/Button';
import './ProductRender.css';
import { CountContext } from '../../Components/CountContext/CountContext';

import { HeartOutlined } from '@ant-design/icons';
import { Col, Row, Rate, notification, Modal, Tag, Input } from 'antd';
import { EyeOutlined, ShoppingCartOutlined, SwapOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

function ProductRender({ products }) {
    const value = useContext(CountContext);

    const [openQuickView, setOpenQuickView] = useState(false);

    const cartItems = JSON.parse(localStorage.getItem('carts'));

    const [isAddedCart, setIsAddedCart] = useState(
        JSON.parse(localStorage.getItem('addedCart')) || {},
    );
    localStorage.setItem('addedCart', JSON.stringify(isAddedCart));

    const [isAddedWishList, setIsAddedWishList] = useState(
        JSON.parse(localStorage.getItem('addedWishList')) || {},
    );
    localStorage.setItem('addedWishList', JSON.stringify(isAddedWishList));

    const [isAddedCompare, setIsAddedCompare] = useState(
        JSON.parse(localStorage.getItem('addedCompare')) || {},
    );
    localStorage.setItem('addedCompare', JSON.stringify(isAddedCompare));

    const [quickView, setQuickView] = useState([]);

    let [count, setCount] = useState(1);

    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount((count = count <= 1 ? 1 : count - 1));
    };

    const handleAddToCart = (id) => {
        var items = JSON.parse(localStorage.getItem('carts') || '[]');
        var item = products.find((product) => product.id === id);
        if (item) {
            items.push({ ...item, quantity: 1 });
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

    const handleAddToCartFromQuickView = (id) => {
        var items = JSON.parse(localStorage.getItem('carts') || '[]');
        var item = products.find((product) => product.id === id);
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

    const handleQuickView = (product) => {
        setOpenQuickView(true);
        setQuickView({ ...product });
    };

    console.log(cartItems);

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
                                            {!isAddedWishList[product.id] && (
                                                <ButtonComponent
                                                    onClick={() =>
                                                        handleAddToWishList(product.id)
                                                    }
                                                    productAction
                                                    className="pl-0 pr-0 btn-wist-list"
                                                >
                                                    <HeartOutlined />
                                                </ButtonComponent>
                                            )}
                                            {isAddedWishList[product.id] && (
                                                <ButtonComponent
                                                    productAction
                                                    className="pl-0 pr-0 btn-disable"
                                                >
                                                    <HeartOutlined />
                                                </ButtonComponent>
                                            )}
                                        </div>
                                    </Col>
                                    <Col xs={16} lg={16} md={16} sm={16}>
                                        <div className="product-same-action product-cart">
                                            {!isAddedCart[product.id] && (
                                                <ButtonComponent
                                                    onClick={() =>
                                                        handleAddToCart(product.id)
                                                    }
                                                    productAction
                                                    className="pl-0 pr-0 btn-cart"
                                                >
                                                    <ShoppingCartOutlined className="mr-5" />
                                                    <span>Thêm vào giỏ hàng</span>
                                                </ButtonComponent>
                                            )}
                                            {isAddedCart[product.id] && (
                                                <ButtonComponent
                                                    productAction
                                                    className="pl-0 pr-0 btn-disable"
                                                >
                                                    <ShoppingCartOutlined className="mr-5" />
                                                    <span>Đã thêm</span>
                                                </ButtonComponent>
                                            )}
                                        </div>
                                    </Col>
                                    <Col xs={4} lg={4} md={4} sm={4}>
                                        <div className="product-same-action product-quick-view">
                                            <ButtonComponent
                                                onClick={() => handleQuickView(product)}
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
            <Modal
                className="modal-quick-view"
                width={1000}
                centered
                open={openQuickView}
                onCancel={() => setOpenQuickView(false)}
            >
                <Row gutter={[32, 32]}>
                    <Col xs={12} lg={12} md={24} sm={24}>
                        <img src={quickView.img} alt="" style={{ width: '100%' }} />
                    </Col>
                    <Col xs={12} lg={12} md={24} sm={24}>
                        <div className="ml-70">
                            <div
                                style={{
                                    borderBottom: '1px solid #ccc',
                                }}
                            >
                                <p className="product-detail-name">{quickView.name}</p>
                                <p className="product-detail-price mt-16 mb-20">
                                    {quickView.price}
                                </p>
                                <p className="pb-20 mb-20">Mô tả</p>
                            </div>
                            <div className="product-detail-quality d-flex align-items-center">
                                <div className="cart-minus-plus mt-20 mb-20 py-20">
                                    <Input
                                        value={count}
                                        readOnly
                                        prefix={
                                            <button onClick={decreaseCount}>-</button>
                                        }
                                        suffix={
                                            <button onClick={increaseCount}>+</button>
                                        }
                                        style={{
                                            width: '80px',
                                            outline: 'none',
                                        }}
                                        size="large"
                                    />
                                </div>
                                {!isAddedCart[quickView.id] && (
                                    <ButtonComponent
                                        primary
                                        className="add-to-cart mx-20"
                                        onClick={() =>
                                            handleAddToCartFromQuickView(quickView.id)
                                        }
                                    >
                                        Thêm
                                    </ButtonComponent>
                                )}
                                {isAddedCart[quickView.id] && (
                                    <ButtonComponent
                                        primary
                                        className="add-to-cart mx-20"
                                    >
                                        Đã thêm
                                    </ButtonComponent>
                                )}
                                {!isAddedWishList[quickView.id] && (
                                    <ButtonComponent
                                        onClick={() => handleAddToWishList(quickView.id)}
                                        primaryHover
                                        className="pl-0 pr-0 mx-20"
                                    >
                                        <HeartOutlined />
                                    </ButtonComponent>
                                )}
                                {isAddedWishList[quickView.id] && (
                                    <ButtonComponent
                                        primaryHover
                                        className="pl-0 pr-0 mx-20"
                                    >
                                        <HeartOutlined
                                            style={{ color: 'var(--primary-color)' }}
                                        />
                                    </ButtonComponent>
                                )}
                                {!isAddedCompare[quickView.id] && (
                                    <ButtonComponent
                                        onClick={() => handleAddToCompare(quickView.id)}
                                        primaryHover
                                        className="pl-0 pr-0 mx-20"
                                    >
                                        <SwapOutlined />
                                    </ButtonComponent>
                                )}
                                {isAddedCompare[quickView.id] && (
                                    <ButtonComponent
                                        primaryHover
                                        className="pl-0 pr-0 mx-20"
                                    >
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
                                    {quickView.category}
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
                                        {quickView.tag}
                                    </ButtonComponent>
                                </Tag>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Modal>
        </Row>
    );
}

export default ProductRender;
