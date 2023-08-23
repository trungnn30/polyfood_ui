import Header from "../../components/Layout/Components/Header";
import BreadCrumbArea from '../../components/Layout/BreadCrumb';
import CompareArea from "../../components/Layout/Compare";
import FooterArea from '../../components/Layout/Components/Footer';
import { FloatButton } from 'antd';

function ComparePage() {
    return (  
        <>
            <Header />
            <BreadCrumbArea page={'SO SÁNH'}/>
            <CompareArea />
            <FooterArea />
            <FloatButton.BackTop />
        </>
    );
}

export default ComparePage;