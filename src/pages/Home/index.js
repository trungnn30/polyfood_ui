import BannerArea from '../../components/Layout/Home/BannerArea';
import FooterArea from '../../components/Layout/Home/FooterArea';
import FunfactArea from '../../components/Layout/Home/FunfactArea';
import HomeHeader from '../../components/Layout/Home/HeaderArea/HomeHeader';
import SubcribeArea from '../../components/Layout/Home/SubcribeArea';
import SupportArea from '../../components/Layout/Home/SupportArea';
import SlideArea from '../../components/Layout/Home/Swiper/SlideArea';
import TestimonialArea from '../../components/Layout/Home/TestimonialArea';

function HomePage() {
    return (
        <>
            <div className="container px-70">
                <HomeHeader />
                <SlideArea />
                <SupportArea />
                <BannerArea />
                <FunfactArea />
                <TestimonialArea />
                <SubcribeArea />
                <FooterArea />
            </div>
        </>
    );
}

export default HomePage;
