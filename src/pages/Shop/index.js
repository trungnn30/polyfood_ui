import './Shop.css';
import Header from '../../components/Layout/Components/Header';
import FooterArea from '../../components/Layout/Components/Footer';
import Product from '../../components/Layout/Product';
import BreadCrumbArea from '../../components/Layout/BreadCrumb';

function ShopPage() {
    return (
        <>
            <Header />
            <BreadCrumbArea page={'SẢN PHẨM'} />
            <Product />
            <FooterArea />
        </>
    );
}

export default ShopPage;
