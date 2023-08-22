import ButtonComponent from '../../Components/Button';
import './ProductShop.css';

import { Select } from 'antd';
import { UnorderedListOutlined, AppstoreOutlined, TableOutlined } from '@ant-design/icons';
import ProductRender from '../ProductRender';

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
        <div>
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
                        <p>{products.length} / 25 sản phẩm</p>
                    </div>
                    <div className="shop-tab d-flex align-items-center">
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
                <ProductRender products={products}/>
            </div>
        </div>
    );
}

export default ProductShop;
