import './About.css';
import Header from '../../components/Layout/Components/Header';
import WelcomeArea from '../../components/Layout/About/WelcomeArea';
import AboutBannerArea from '../../components/Layout/About/AboutBannerArea';
import AboutMissionArea from '../../components/Layout/About/AboutMissonArea';
import AboutFunfactArea from '../../components/Layout/About/AboutFunfactArea';
import AboutTeamArea from '../../components/Layout/About/AboutTeamArea';
import FooterArea from '../../components/Layout/Components/Footer';
import BreadCrumbArea from '../../components/Layout/BreadCrumb';
import { FloatButton } from 'antd';

function AboutPage() {
    return (
        <>
            <Header />
            <BreadCrumbArea page={'GIỚI THIỆU'} />
            <WelcomeArea />
            <AboutBannerArea />
            <AboutMissionArea />
            <AboutFunfactArea />
            <AboutTeamArea />
            <FooterArea />
            <FloatButton.BackTop />
        </>
    );
}

export default AboutPage;
