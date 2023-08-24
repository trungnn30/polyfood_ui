import Header from '../../components/Layout/Components/Header';
import BreadCrumbArea from '../../components/Layout/BreadCrumb';
import CheckOutArea from '../../components/Layout/Checkout';
import FooterArea from '../../components/Layout/Components/Footer';
import { FloatButton } from 'antd';

function CheckOutPage() {
    return (
        <>
            <Header />
            <BreadCrumbArea page={'THANH TOÁN'} />
            <CheckOutArea />
            <FooterArea />
            <FloatButton.BackTop />
        </>
    );
}

export default CheckOutPage;
