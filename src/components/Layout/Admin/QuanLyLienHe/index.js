import { Table } from 'antd/lib';

function QuanLyLienHe() {
    const columns = [
        {
            title: 'Quyền hạn',
            dataIndex: 'Authority_name',
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

export default QuanLyLienHe;
