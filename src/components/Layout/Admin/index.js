import { Layout } from 'antd';
import { useState } from 'react';

import SideBar from '../Components/SideBar';
const { Header, Content, Sider } = Layout;

function AdminPage({ children }) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: '0px 4px 5px 0px rgba(0, 0, 0, 0.2)',
                    zIndex: '99',
                }}
                theme="dark"
            >
                <p
                    style={{
                        fontSize: '34px',
                        margin: '20px 0px 14px',
                    }}
                >
                    <span style={{ color: 'rgb(245, 134, 52)' }}>POLY</span>
                    <span style={{ color: 'rgb(105, 181, 80)' }}>FOOD</span>
                </p>
            </Header>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider
                    width={250}
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                >
                    <SideBar />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: '#fff',
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default AdminPage;
