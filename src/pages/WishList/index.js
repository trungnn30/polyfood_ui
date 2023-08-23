import Header from "../../components/Layout/Components/Header";
import BreadCrumbArea from '../../components/Layout/BreadCrumb';
import WishListArea from "../../components/Layout/WishList";
import FooterArea from '../../components/Layout/Components/Footer';
import { FloatButton } from 'antd';

function WishListPage() {
    return (  
        <>
            <Header />
            <BreadCrumbArea page={'YÊU THÍCH'}/>
            <WishListArea />
            <FooterArea />
            <FloatButton.BackTop />
        </>
    );
}

export default WishListPage;