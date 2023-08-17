import Header from '../../components/Layout/Components/Header';
import FooterArea from '../../components/Layout/Components/Footer';
import BreadCrumbArea from '../../components/Layout/BreadCrumb';
import BlogStandardDetails from "../../components/Layout/Blog/BlogStandardDetails";
import { FloatButton } from 'antd';

function BlogDetail() {
    return (
        <>
            <Header />
            <BreadCrumbArea page={'BLOG POST'} />
            <BlogStandardDetails />
            <FooterArea />
            <FloatButton.BackTop />
        </>
    );
}

export default BlogDetail;
