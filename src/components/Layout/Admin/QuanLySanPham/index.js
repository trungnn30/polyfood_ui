import { Table } from 'antd/lib';

function QuanLySanPham() {
    const columns = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name_product',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'avartar_image_product',
        },
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Giảm giá',
            dataIndex: 'discount',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
        },
        {
            title: 'Số lượng xem',
            dataIndex: 'number_of_views',
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

export default QuanLySanPham;
