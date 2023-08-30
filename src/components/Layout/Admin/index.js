import { Layout } from 'antd';
import SideBar from '../Components/SideBar';
const { Header, Content, Sider } = Layout;

function AdminPage({ children }) {
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: '#fff',
                    boxShadow: '0px 4px 5px 0px rgba(0, 0, 0, 0.2)',
                    zIndex: '99',
                }}
            >
                <img
                    src="assets/img/GSlogo.png"
                    width={'100'}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                />
            </Header>
            <Layout>
                <Sider
                    width={250}
                    style={{
                        background: '#f8f8f8',
                    }}
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
