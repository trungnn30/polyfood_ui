import BreadCrumbArea from '../../components/Layout/BreadCrumb';
import Footer from '../../components/Layout/Components/Footer';
import Header from '../../components/Layout/Components/Header';
import ForgorPasswordArea from '../../components/Layout/ForgotPassword';
import { FloatButton } from 'antd';

function ForgotPasswordPage() {
    return (
        <>
            <Header />
            <BreadCrumbArea page={'QUÊN MẬT KHẨU'} />
            <ForgorPasswordArea />
            <Footer />
            <FloatButton.BackTop />
        </>
    );
}

export default ForgotPasswordPage;
