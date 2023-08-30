import { Table, Modal, Form, Input } from 'antd/lib';

function QuanLyTrangThaiDatHang() {
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

export default QuanLyTrangThaiDatHang;
