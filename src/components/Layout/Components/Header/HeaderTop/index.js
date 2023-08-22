import { RocketFilled, DownOutlined } from '@ant-design/icons';

import './HeaderTop.css';
import ButtonComponent from '../../../Components/Button';

function HeaderTop() {
    return (
        <div className="header-top">
            <div className="d-flex justify-content-between align-items-center py-20">
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
    );
}

export default HeaderTop;
