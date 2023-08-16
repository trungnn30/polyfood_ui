import {
    RocketFilled,
    SearchOutlined,
    UserOutlined,
    HeartOutlined,
    ShoppingOutlined,
    SwapOutlined,
    DownOutlined,
} from '@ant-design/icons';
import { useEffect } from 'react';
import { Dropdown, Space, Input } from 'antd';

import ButtonComponent from '../../../Components/Button';
import NavHeader from '../NavHeader';
import './HomeHeader.css';

const { Search } = Input;

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

    const items = [
        {
            key: '1',
            label: (
                <ButtonComponent primaryHover to={'/login-register'}>
                    Đăng nhập
                </ButtonComponent>
            ),
        },
    ];

    // const findItems = [
    //     {
    //         key: '2',
    //         label: (
    //             <div>
    //                 <Search size="large" enterButton />
    //             </div>
    //         ),
    //     },
    // ];
    return (
        <div className="header-area">
            <div className="home-header-top px-70">
                <div className="header-top-wrap d-flex justify-content-between align-items-center py-20">
                    <div className="languages-wrap">
                        <ButtonComponent primaryHover className="languages pl-0">
                            Tiếng Việt
                            <DownOutlined className="ml-5" style={{ fontSize: '10px' }} />
                        </ButtonComponent>
                        <div className="dropdown">
                            <ul>
                                <li className="language-item">
                                    <ButtonComponent primaryHover>Tiếng Việt</ButtonComponent>
                                </li>
                                <li className="language-item">
                                    <ButtonComponent primaryHover>English</ButtonComponent>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p style={{ letterSpacing: '0.8px', color: '#555252' }}>
                        <RocketFilled />
                        Giao hàng toàn quốc & nhanh chóng
                    </p>
                </div>
            </div>

            <div className="sticky-header">
                <div className="px-70">
                    <div className="header-bottom mt-5">
                        <div className="header-bottom-wrap d-flex justify-content-between">
                            <img src="./assets/img/GSlogo.png" style={{ width: '200px' }} alt="" />
                            <NavHeader />
                            <div>
                                <nav>
                                    <ul className="d-flex">
                                        <li>
                                            {/* <Dropdown
                                                menu={{ findItems }}
                                                trigger={['click']}
                                                placement="bottomRight"
                                                arrow
                                            >
                                                <ButtonComponent
                                                    primaryHover
                                                    onClick={(e) => e.preventDefault()}
                                                    className="lh-74 icon"
                                                >
                                                    <SearchOutlined />
                                                </ButtonComponent>
                                            </Dropdown> */}
                                            <ButtonComponent
                                                primaryHover
                                                onClick={(e) => e.preventDefault()}
                                                className="lh-74 icon"
                                            >
                                                <SearchOutlined />
                                            </ButtonComponent>
                                        </li>
                                        <li>
                                            <Dropdown
                                                menu={{ items }}
                                                trigger={['click']}
                                                placement="bottomRight"
                                                arrow
                                            >
                                                <ButtonComponent
                                                    primaryHover
                                                    onClick={(e) => e.preventDefault()}
                                                    className="lh-74 icon"
                                                >
                                                    <Space>
                                                        <UserOutlined />
                                                    </Space>
                                                </ButtonComponent>
                                            </Dropdown>
                                        </li>
                                        <li>
                                            <ButtonComponent primaryHover className="lh-74 icon">
                                                <SwapOutlined />
                                            </ButtonComponent>
                                        </li>
                                        <li>
                                            <ButtonComponent primaryHover className="lh-74 icon">
                                                <HeartOutlined />
                                            </ButtonComponent>
                                        </li>
                                        <li>
                                            <ButtonComponent primaryHover className="lh-74 icon pr-0">
                                                <ShoppingOutlined />
                                            </ButtonComponent>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;
