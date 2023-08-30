import { Table, Modal, Form, Input } from 'antd/lib';

function QuanLyLoaiSanPham() {
    const columns = [
        {
            title: 'Tên loại',
            dataIndex: 'name_product_type',
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'image_type_product',
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

export default QuanLyLoaiSanPham;
