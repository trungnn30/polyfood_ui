import BreadCrumbArea from '../../components/Layout/BreadCrumb';
import Footer from '../../components/Layout/Components/Footer';
import Header from '../../components/Layout/Components/Header';
import LoginRegister from '../../components/Layout/Login-Register';

function LoginRegisterPage() {
    return (
        <>
            <Header />
            <BreadCrumbArea page={'ĐĂNG NHẬP - ĐĂNG KÝ'} />
            <LoginRegister />
            <Footer />
        </>
    );
}

export default LoginRegisterPage;
