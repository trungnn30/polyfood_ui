import ButtonComponent from '../../Components/Button';
import { Space, Checkbox, Input } from 'antd';
import './ProductSideBar.css';
const { Search } = Input;

function ProductSideBar() {
    const options = [
        {
            label: 'Tất Cả Danh Mục',
            value: 'Tất Cả Danh Mục',
        },
        {
            label: 'Món Chay Mặn',
            value: 'Món Chay Mặn',
        },
        {
            label: 'Hàng Chay Cấp Đông',
            value: 'Hàng Chay Cấp Đông',
        },
        {
            label: 'Món Nộm',
            value: 'Món Nộm',
        },
        {
            label: 'Món Cơm',
            value: 'Món Cơm',
        },
    ];
    const onChange = (values) => {
        console.log('checked = ', values);
    };
    return (
        <div className="sidebar">
            <div className="sidebar-widget">
                <p>Tìm kiếm sản phẩm</p>
                <div className="sidebar-search mb-50 mt-25">
                    <Space direction="vertical">
                        <Search placeholder="Nhập tên sản phẩm" allowClear size="large" />
                    </Space>
                </div>
            </div>
            <div className="sidebar-widget">
                <p>Theo Danh Mục</p>
                <Checkbox.Group options={options} onChange={onChange} className="mb-50 mt-25" />
            </div>
            <div className="sidebar-widget">
                <p>Nhãn</p>
                <ul className="mb-50 mt-25">
                    <li>
                        <ButtonComponent tag>Món Chay Mặn</ButtonComponent>
                    </li>
                    <li>
                        <ButtonComponent tag>Hàng Chay Cấp Đông</ButtonComponent>
                    </li>
                    <li>
                        <ButtonComponent tag>Món Nộm</ButtonComponent>
                    </li>
                    <li>
                        <ButtonComponent tag>Món Cơm</ButtonComponent>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProductSideBar;
