import Header from '../../components/Layout/Components/Header';
import FooterArea from '../../components/Layout/Components/Footer';
import BreadCrumbArea from '../../components/Layout/BreadCrumb';
import ProductDetails from '../../components/Layout/Product/ProductDetails';

function ShopDetail() {
    return (
        <>
            <Header />
            <BreadCrumbArea page={'CHI TIẾT SẢN PHẨM'} />
            <ProductDetails />
            <FooterArea />
        </>
    );
}

export default ShopDetail;
