import { Table } from 'antd/lib';

function QuanLySlides() {
    const columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'product_id',
        },
        {
            title: 'Người đánh giá',
            dataIndex: 'user_id',
        },
        {
            title: 'Đánh giá',
            dataIndex: 'content_rated',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
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

export default QuanLySlides;