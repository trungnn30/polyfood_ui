import { useEffect } from 'react';
import './HomeHeader.css';
import HeaderTop from '../../../Components/Header/HeaderTop';
import HeaderBottom from '../../../Components/Header/HeaderBottom';

function HomeHeader() {
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector('.sticky-header');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };
    return (
        <div className="header-area">
            <div className="home-header-top px-70">
                <div className="header-top-wrap">
                    <HeaderTop />
                </div>
            </div>

            <div className="sticky-header">
                <div className="px-70">
                    <HeaderBottom />
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;
