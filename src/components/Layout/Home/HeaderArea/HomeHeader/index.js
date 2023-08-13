import './HomeHeader.css';
import {
    RocketFilled,
    SearchOutlined,
    UserOutlined,
    HeartOutlined,
    ShoppingOutlined,
    SwapOutlined,
    DownOutlined,
} from '@ant-design/icons';
import items from '../NavHeader';
import ButtonComponent from '../../../Components/Button';

function HomeHeader() {
    return (
        <div className="header-area">
            <div className="header-top">
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
                    <p style={{ letterSpacing: '0.8px' }}>
                        <RocketFilled />
                        Giao hàng toàn quốc & nhanh chóng
                    </p>
                </div>
            </div>

            <div className="header-bottom mt-5">
                <div className="header-bottom-wrap d-flex justify-content-between">
                    <img src="./assets/img/GSlogo.png" style={{ width: '200px' }} alt="" />
                    <div>
                        <nav>
                            <ul className="d-flex">
                                {items.map((item) => (
                                    <li key={item.key}>
                                        <ButtonComponent primaryHover className="lh-74">
                                            {item.label}
                                        </ButtonComponent>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <nav>
                            <ul className="d-flex">
                                <li>
                                    <ButtonComponent primaryHover className="lh-74 icon">
                                        <SearchOutlined />
                                    </ButtonComponent>
                                </li>
                                <li>
                                    <ButtonComponent primaryHover className="lh-74 icon">
                                        <UserOutlined />
                                    </ButtonComponent>
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
    );
}

export default HomeHeader;
