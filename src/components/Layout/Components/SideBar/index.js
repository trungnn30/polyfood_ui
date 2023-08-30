import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

function SideBar() {
    const navigate = useNavigate();
    const items = [
        { label: 'Quản lý tài khoản', key: '/quanlytaikhoan' },
        { label: 'Quản lý phân quyền', key: '/quanlyphanquyen' },
        { label: 'Quản lý loại sản phẩm', key: '/quanlyloaisanpham' },
        { label: 'Quản lý sản phẩm', key: '/quanlysanpham' },
        { label: 'Quản lý đánh giá', key: '/quanlydanhgia' },
        { label: 'Quản lý trạng thái đặt hàng', key: '/quanlytrangthaidathang' },
    ];
    return (
        <Menu
            mode="inline"
            items={items}
            style={{
                height: '100%',
                textAlign: 'left',
                background: '#f8f8f8',
            }}
            onClick={({ key }) => {
                navigate(key);
            }}
        />
    );
}

export default SideBar;
