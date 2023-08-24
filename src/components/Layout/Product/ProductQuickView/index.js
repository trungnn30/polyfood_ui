import { Col, Row, Input } from 'antd';
import { useState } from 'react';

import ButtonComponent from '../../Components/Button';
import { HeartOutlined, SwapOutlined } from '@ant-design/icons';

function ProductQuickView({ product }) {
    let [count, setCount] = useState(1);
    const increaseCount = () => {
        setCount(count + 1);
    };
    const decreaseCount = () => {
        setCount((count = count <= 1 ? 1 : count - 1));
    };
    const handleAddToCompare = (id) => {
        var items = JSON.parse(localStorage.getItem('compare') || '[]');
        var item = product.find((x) => x.id === id);
        items.push(item);
        localStorage.setItem('compare', JSON.stringify(items));
    };
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
                            <p className="product-detail-price mt-16 mb-20">{product.price}</p>
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
                            <ButtonComponent primary className="add-to-cart mx-20">
                                Thêm
                            </ButtonComponent>
                            <ButtonComponent primaryHover className="pl-0 pr-0 mx-20">
                                <HeartOutlined />
                            </ButtonComponent>
                            <ButtonComponent
                                onClick={() => handleAddToCompare(product.id)}
                                primaryHover
                                className="pl-0 pr-0 mx-20"
                            >
                                <SwapOutlined />
                            </ButtonComponent>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ProductQuickView;
