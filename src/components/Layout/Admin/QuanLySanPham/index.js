import { Table, Space, message, Popconfirm } from 'antd/lib';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

import ButtonComponent from '../../../Layout/Components/Button';
import UpdateProduct from './UpdateProduct';

function QuanLySanPham() {
    const [products, setProducts] = useState([]);
    const [productCurrently, setProductCurrently] = useState(null);

    //Get
    const getProducts = async () => {
        const res = await fetch('https://localhost:7121/api/Product', {
            method: 'GET',
        });
        const result = await res.json();
        setProducts(result.data);
    };
    useEffect(() => {
        getProducts();
    }, []);
    console.log(products);

    //Put
    const onProductUpdated = (updatedProduct) => {
        setProductCurrently(null);

        if (updatedProduct === null) {
            return;
        }

        let productsCopy = [...products];

        const index = productsCopy.findIndex(
            (x) => x.product_type_id === updatedProduct.product_type_id,
        );

        if (index !== -1) {
            productsCopy[index] = updatedProduct;
        }

        setProducts(productsCopy);

        message.success(`Update successfully!!`);
    };

    //Delete
    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    };
    const confirm = async (record) => {
        await fetch(`https://localhost:7121/api/Product/${record.product_id}`, {
            method: 'DELETE',
        }).then((res) => {
            if (res.ok) {
                setProducts((pre) => {
                    return pre.filter((x) => x.product_id !== record.product_id);
                });
                message.success('Delete succesful!');
            } else {
                message.error('Something went wrong');
                console.log(res);
            }
        });
    };
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
            dataIndex: 'avatar_image_product',
        },
        {
            title: 'Giảm giá',
            dataIndex: 'discout',
        },
        {
            title: 'Số lượng',
            dataIndex: 'stock',
        },
        {
            title: 'Tên danh mục',
            dataIndex: 'product_type_id',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) =>
                products.length > 1 ? (
                    <Space size="middle">
                        <Popconfirm
                            title="Bạn có chắc chắn muốn xóa?"
                            description="(Hãy cân nhắc trước khi xóa)"
                            onConfirm={() => confirm(record)}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <DeleteOutlined />
                        </Popconfirm>
                        <ButtonComponent
                            primaryHover
                            className="pl-0 pr-0"
                            onClick={() => setProductCurrently(record)}
                        >
                            <Space>
                                <FormOutlined />
                            </Space>
                        </ButtonComponent>
                    </Space>
                ) : null,
        },
    ];
    return (
        <>
            {productCurrently === null && (
                <Table
                    columns={columns}
                    dataSource={products}
                    rowKey={(products) => products.product_id}
                />
            )}
            {productCurrently !== null && (
                <UpdateProduct product={productCurrently} onProductUpdated={onProductUpdated} />
            )}
        </>
    );
}

export default QuanLySanPham;
