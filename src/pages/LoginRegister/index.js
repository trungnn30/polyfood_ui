import BreadCrumbArea from '../../components/Layout/BreadCrumb';
import Footer from '../../components/Layout/Components/Footer';
import Header from '../../components/Layout/Components/Header';
import LoginRegister from '../../components/Layout/Login-Register';
import { FloatButton } from 'antd';

function LoginRegisterPage() {
    return (
        <>
            <Header />
            <BreadCrumbArea page={'ĐĂNG NHẬP - ĐĂNG KÝ'} />
            <LoginRegister />
            <Footer />
            <FloatButton.BackTop />
        </>
    );
}

export default LoginRegisterPage;
