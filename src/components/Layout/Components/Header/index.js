import { useEffect } from 'react';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';

function Header() {
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector('.sticky-header');
        const scrollTop = window.scrollY;
        scrollTop >= 100 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };
    return (
        <div className="header-area">
            <div
                style={{
                    borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
                }}
            >
                <div className="container">
                    <HeaderTop />
                </div>
            </div>

            <div className="sticky-header">
                <div className="container">
                    <HeaderBottom />
                </div>
            </div>
        </div>
    );
}

export default Header;
