import Header from "../../components/Layout/Components/Header";
import BreadCrumbArea from '../../components/Layout/BreadCrumb';
import CartArea from "../../components/Layout/Cart";
import FooterArea from '../../components/Layout/Components/Footer';
import { FloatButton } from 'antd';

function CartPage() {
    return (  
        <>
            <Header />
            <BreadCrumbArea page={'GIỎ HÀNG'}/>
            <CartArea />
            <FooterArea />
            <FloatButton.BackTop />
        </>
    );
}

export default CartPage;