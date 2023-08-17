import './LoginRegister.css';

import { Tabs } from 'antd';
import Login from './Login';
import Register from './Register';

function LoginRegister() {
    return (
        <div className="login-register-area py-100">
            <Tabs
                centered
                items={[
                    {
                        label: 'Đăng Nhập',
                        key: '1',
                        children: <Login />,
                    },
                    {
                        label: 'Đăng Ký',
                        key: '2',
                        children: <Register />,
                    },
                ]}
                size="large"
            />
        </div>
    );
}

export default LoginRegister;
