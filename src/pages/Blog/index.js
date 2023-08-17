import FooterArea from '../../components/Layout/Components/Footer';
import Header from '../../components/Layout/Components/Header';
import BreadCrumbArea from '../../components/Layout/BreadCrumb';
import BlogStandard from '../../components/Layout/Blog/BlogStandard';
import { FloatButton } from 'antd';

function BlogPage() {
    return (
        <>
            <Header />
            <BreadCrumbArea page={'TIN TỨC'}/>
            <BlogStandard />
            <FooterArea />
            <FloatButton.BackTop />
        </>
    );
}

export default BlogPage;
