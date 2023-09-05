import { Table } from 'antd/lib';

function QuanLyTaiKhoan() {
    const columns = [
        {
            title: 'Tên đăng nhập',
            dataIndex: 'user_name',
        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
        },
        {
            title: 'Phân quyền',
            dataIndex: 'decentralization_id',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'create_at',
        },
        {
            title: 'Ngày cập nhật',
            dataIndex: 'update_at',
        },
    ];
    return (
        <>
            <Table columns={columns} dataSource={[]} />
        </>
    );
}

export default QuanLyTaiKhoan;
