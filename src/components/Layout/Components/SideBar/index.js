import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
    DashboardOutlined,
    ShoppingCartOutlined,
    AppstoreOutlined,
    TeamOutlined,
    MoneyCollectOutlined,
    QuestionCircleOutlined,
    ReadOutlined,
    ShoppingOutlined,
    DesktopOutlined,
    UnorderedListOutlined,
    FormOutlined,
    ClockCircleOutlined,
    CheckCircleOutlined,
    CarOutlined,
    CheckSquareOutlined,
    FrownOutlined,
    CloseCircleOutlined,
} from '@ant-design/icons/lib/icons';

function SideBar() {
    const navigate = useNavigate();
    const items = [
        { label: 'Bảng điều khiển', key: '/admin/dashboard', icon: <DashboardOutlined /> },
        {
            label: 'Quản lý sản phẩm',
            key: 1,
            children: [
                { icon: <UnorderedListOutlined />, label: 'Danh sách sản phẩm', key: '/admin/products' },
                { icon: <FormOutlined />, label: 'Tạo sản phẩm', key: '/admin/products-add' },
            ],
            icon: <ShoppingCartOutlined />,
        },
        {
            label: 'Quản lý danh mục',
            key: 2,
            children: [
                {
                    icon: <UnorderedListOutlined />,
                    label: 'Danh sách danh mục',
                    key: '/admin/categories',
                },
                { icon: <FormOutlined />, label: 'Tạo danh mục', key: '/admin/categories-add' },
            ],
            icon: <AppstoreOutlined />,
        },
        {
            label: 'Quản lý người dùng',
            key: 3,
            children: [
                {
                    icon: <UnorderedListOutlined />,
                    label: 'Danh sách người dùng',
                    key: '/admin/account',
                },
            ],
            icon: <TeamOutlined />,
        },
        {
            label: 'Quản lý mã giảm giá',
            key: 4,
            children: [
                {
                    icon: <UnorderedListOutlined />,
                    label: 'Danh sách mã giảm giá',
                    key: '/admin/vouchers',
                },
                { icon: <FormOutlined />, label: 'Tạo mã giảm giá', key: '/admin/vouchers-add' },
            ],
            icon: <MoneyCollectOutlined />,
        },
        {
            label: 'Quản lý liên hệ',
            key: 5,
            children: [
                { icon: <UnorderedListOutlined />, label: 'Danh sách liên hệ', key: '/admin/contacts' },
            ],
            icon: <QuestionCircleOutlined />,
        },
        {
            label: 'Quản lý bài viết',
            key: 6,
            children: [
                { icon: <UnorderedListOutlined />, label: 'Danh sách bài viết', key: '/admin/news' },
                { icon: <FormOutlined />, label: 'Tạo bài viết', key: '/admin/news-add' },
            ],
            icon: <ReadOutlined />,
        },
        {
            label: 'Quản lý đơn hàng',
            key: 7,
            children: [
                { icon: <UnorderedListOutlined />, label: 'Danh sách đơn hàng', key: '/admin/orders' },
                {
                    icon: <ClockCircleOutlined />,
                    label: 'Đơn hàng đang chờ',
                    key: '/admin/orders-pending',
                },
                {
                    icon: <CheckCircleOutlined />,
                    label: 'Đơn hàng xác nhận',
                    key: '/admin/orders-been-confirmed',
                },
                {
                    icon: <CarOutlined />,
                    label: 'Đơn hàng đang giao',
                    key: '/admin/orders-being-delivered',
                },
                {
                    icon: <CheckSquareOutlined />,
                    label: 'Đơn hoàn thành',
                    key: '/admin/orders-completed',
                },
                { icon: <CloseCircleOutlined />, label: 'Đơn đã hủy', key: '/admin/orders-canceled' },
                {
                    icon: <FrownOutlined />,
                    label: 'Đơn khách hàng hủy',
                    key: '/admin/orders-canceled-by-customer',
                },
            ],
            icon: <ShoppingOutlined />,
        },
        {
            label: 'Quản lý slideshow',
            key: 8,
            children: [
                { icon: <UnorderedListOutlined />, label: 'Danh sách slideshow', key: '/admin/slides' },
                { icon: <FormOutlined />, label: 'Tạo slideshow', key: '/admin/slides-add' },
            ],
            icon: <DesktopOutlined />,
        },
    ];
    return (
        <Menu
            mode="inline"
            items={items}
            onClick={({ key }) => {
                navigate(key);
            }}
            theme="dark"
        />
    );
}

export default SideBar;
