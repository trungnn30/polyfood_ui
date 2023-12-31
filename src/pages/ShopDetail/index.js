import Header from '../../components/Layout/Components/Header';
import FooterArea from '../../components/Layout/Components/Footer';
import BreadCrumbArea from '../../components/Layout/BreadCrumb';
import ProductDetails from '../../components/Layout/Product/ProductDetails';
import { FloatButton } from 'antd';

function ShopDetail() {
    return (
        <>
            <Header />
            <BreadCrumbArea page={'CHI TIẾT SẢN PHẨM'} />
            <ProductDetails />
            <FooterArea />
            <FloatButton.BackTop />
        </>
    );
}

export default ShopDetail;
