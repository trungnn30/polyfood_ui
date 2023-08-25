import { Tabs } from 'antd';
import ForgotPassword from './ForgotPassword';

function ForgorPasswordArea() {
    return (
        <div className="forgot-password-area py-100">
            <Tabs
                centered
                items={[
                    {
                        label: 'Quên mật khẩu',
                        key: '1',
                        children: <ForgotPassword />,
                    }
                ]}
                size="large"
            />
        </div>
    );
}

export default ForgorPasswordArea;
