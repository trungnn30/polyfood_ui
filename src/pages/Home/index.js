import BannerArea from '../../components/Layout/Home/BannerArea';
import FooterArea from '../../components/Layout/Home/FooterArea';
import FunfactArea from '../../components/Layout/Home/FunfactArea';
import HomeHeader from '../../components/Layout/Home/HeaderArea/HomeHeader';
import SubcribeArea from '../../components/Layout/Home/SubcribeArea';
import SupportArea from '../../components/Layout/Home/SupportArea';
import SlideArea from '../../components/Layout/Home/Swiper/SlideArea';
import TestimonialArea from '../../components/Layout/Home/TestimonialArea';
import { FloatButton } from 'antd';

function HomePage() {
    return (
        <>
            <HomeHeader />
            <SlideArea />
            <SupportArea />
            <BannerArea />
            <FunfactArea />
            <TestimonialArea />
            <SubcribeArea />
            <FooterArea />
            <FloatButton.BackTop />
        </>
    );
}

export default HomePage;
