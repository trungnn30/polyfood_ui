import { Table } from 'antd/lib';

function QuanLyDonHang() {
    const columns = [
        {
            title: 'Trạng thái',
            dataIndex: 'status_name',
        },
    ];
    return (
        <>
            <Table columns={columns} dataSource={[]} />
        </>
    );
}

export default QuanLyDonHang;
