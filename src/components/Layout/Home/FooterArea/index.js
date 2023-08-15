import ButtonComponent from '../../Components/Button';
import './FooterArea.css';
import {
    FacebookOutlined,
    DribbbleOutlined,
    TwitterOutlined,
    LinkedinOutlined,
    BehanceOutlined,
} from '@ant-design/icons';

function FooterArea() {
    return (
        <div className="footer-area text-align-center mt-20 px-70">
            <div className="footer-top" style={{ background: '#f6f6f6', padding: '80px 0 60px' }}>
                <div className="footer-top-wrap">
                    <img src="./assets/img/GSlogo.png" alt="" style={{ width: '250px' }} className="mb-40" />
                    <p className="mb-40">Chúng tôi luôn cố gắng để phục vụ tốt nhất với khách hàng</p>
                    <div className="footer-social">
                        <ul className="d-flex justify-content-center">
                            <li>
                                <ButtonComponent primaryHover>
                                    <FacebookOutlined className="font-size-20" />
                                </ButtonComponent>
                            </li>
                            <li>
                                <ButtonComponent primaryHover>
                                    <DribbbleOutlined className="font-size-20" />
                                </ButtonComponent>
                            </li>
                            <li>
                                <ButtonComponent primaryHover>
                                    <BehanceOutlined className="font-size-20" />
                                </ButtonComponent>
                            </li>
                            <li>
                                <ButtonComponent primaryHover>
                                    <TwitterOutlined className="font-size-20" />
                                </ButtonComponent>
                            </li>
                            <li>
                                <ButtonComponent primaryHover>
                                    <LinkedinOutlined className="font-size-20" />
                                </ButtonComponent>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom py-20">
                <p style={{ color: '#848484' }}>Poly Food - © FPT Polytechnic Hà Nội</p>
            </div>
        </div>
    );
}

export default FooterArea;
