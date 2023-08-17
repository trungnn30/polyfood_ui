import FooterArea from '../../components/Layout/Components/Footer';
import Header from '../../components/Layout/Components/Header';
import { FloatButton } from 'antd';
import Contact from '../../components/Layout/Contact';
import BreadCrumbArea from '../../components/Layout/BreadCrumb';

function ContactPage() {
    return (
        <>
            <Header />
            <BreadCrumbArea page={'LIÊN HỆ'}/>
            <Contact />
            <FooterArea />
            <FloatButton.BackTop />
        </>
    );
}

export default ContactPage;
