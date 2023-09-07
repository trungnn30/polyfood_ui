import { Table, Space, Popconfirm, message } from 'antd/lib';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

import ButtonComponent from '../../../Layout/Components/Button';
import UpdateCate from './UpdateCate';

function QuanLyLoaiSanPham() {
    const [productTypes, setProductTypes] = useState([]);
    const [productTypesCurrently, setProductTypesCurrently] = useState(null);

    //Get
    const getProductTypes = async () => {
        const res = await fetch('https://localhost:7121/api/ProductType', {
            method: 'GET',
        });
        const result = await res.json();
        setProductTypes(result.data);
    };
    useEffect(() => {
        getProductTypes();
    }, []);

    //Put
    const onCateUpdated = (updatedType) => {
        setProductTypesCurrently(null);

        if (updatedType === null) {
            return;
        }

        let productTypesCopy = [...productTypes];

        const index = productTypesCopy.findIndex(
            (x) => x.product_type_id === updatedType.product_type_id,
        );

        if (index !== -1) {
            productTypesCopy[index] = updatedType;
        }

        setProductTypes(productTypesCopy);

        message.success(`Update successfully!!`);
    };

    //Delete
    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    };
    const confirm = async (record) => {
        await fetch(`https://localhost:7121/api/ProductType/${record.product_type_id}`, {
            method: 'DELETE',
        }).then((res) => {
            if (res.ok) {
                setProductTypes((pre) => {
                    return pre.filter((x) => x.product_type_id !== record.product_type_id);
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
        {
            title: 'Action',
            key: 'action',
            render: (_, record) =>
                productTypes.length > 1 ? (
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
                            onClick={() => setProductTypesCurrently(record)}
                        >
                            <Space>
                                <FormOutlined />
                            </Space>
                        </ButtonComponent>
                    </Space>
                ) : null,
        },
    ];
    console.log(productTypes);
    return (
        <>
            {productTypesCurrently === null && (
                <Table
                    columns={columns}
                    dataSource={productTypes}
                    rowKey={(productTypes) => productTypes.product_type_id}
                />
            )}
            {productTypesCurrently !== null && (
                <UpdateCate cate={productTypesCurrently} onCateUpdated={onCateUpdated} />
            )}
        </>
    );
}

export default QuanLyLoaiSanPham;
