import './Product.css';
import { Col, Row } from 'antd';
import productItems from './Product';
import { useState } from 'react';
import ProductSideBar from './ProductSideBar';
import ProductShop from './ProductShop';

function Product() {
    const [products, setProduct] = useState(productItems);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [productsPerPage, setProductsPerPage] = useState(9);

    // const indexOfLastProduct = currentPage * productsPerPage;
    // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="product-area">
            <div className="container">
                <div className="product-wrap pt-100 pb-70">
                    <Row>
                        <Col xs={6}>
                            <ProductSideBar />
                        </Col>
                        <Col xs={18}>
                            <ProductShop products={products} />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Product;
