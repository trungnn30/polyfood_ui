import { useState, useEffect } from 'react';
import { Form, Input, Row, Col, Button, Modal, Upload, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

function UpdateProduct(props) {
    const iniData = Object.freeze({
        name_product: props.product.name_product,
        price: props.product.price,
        discout: props.product.discout,
        product_type_id: props.product.product_type_id,
        status: props.product.name_pstatusroduct,
        avatar_image_product: props.product.avatar_image_product,
        stock: props.product.stock,
    });
    const [formData, setFormData] = useState(iniData);

    //Get types
    const [listProductTypes, setListProductTypes] = useState([
        { product_type_id: '', name_product_type: '' },
    ]);
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch('https://localhost:7121/api/ProductType');
            const newData = await resp.json();
            setListProductTypes(newData.data);
        };
        fetchData();
    }, []);
    console.log(listProductTypes);

    const handleAddChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            product_id: props.product.product_id,
            name_product: formData.name_product,
            price: formData.price,
            discout: formData.discout,
            product_type_id: formData.product_type_id,
            status: formData.status,
            avatar_image_product: formData.avatar_image_product,
            stock: formData.stock,
        };

        fetch('https://localhost:7121/api/Product', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            });

        props.onProductUpdated(data);
    };
    const items2 = [
        {
            key: '1',
            label: 'Hiển thị',
            value: 'Hiển thị',
        },
        {
            key: '2',
            label: 'Ẩn',
            value: 'Ẩn',
        },
    ];

    //Pictures
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    return (
        <div>
            <h1 className="text-align-center mb-20">THÊM SẢN PHẨM</h1>
            <Form
                layout="horizontal"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 16,
                }}
            >
                <Form.Item label="Tên sản phẩm" required tooltip="Tên sản phẩm">
                    <Input
                        placeholder="Nhập tên sản phẩm..."
                        name="name_product"
                        value={formData.name_product}
                        onChange={handleAddChange}
                    />
                </Form.Item>
                <Form.Item label="Giá sản phẩm" required tooltip="Giá sản phẩm">
                    <Input
                        placeholder="Nhập giá sản phẩm..."
                        name="price"
                        value={formData.price}
                        onChange={handleAddChange}
                    />
                </Form.Item>
                <Form.Item label="Số lượng" required tooltip="Số lượng">
                    <Input
                        placeholder="Nhập số lượng..."
                        name="stock"
                        value={formData.stock}
                        onChange={handleAddChange}
                    />
                </Form.Item>
                <Form.Item label="Giảm giá" required tooltip="Giảm giá">
                    <Input
                        placeholder="Nhập giảm giá..."
                        name="discout"
                        value={formData.discout}
                        onChange={handleAddChange}
                    />
                </Form.Item>
                <Row gutter={16}>
                    <Col xs={12}>
                        <Form.Item
                            labelCol={{
                                span: 4,
                                offset: 4,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            name="cate"
                            label="Danh mục"
                            required
                        >
                            <div className="ant-select ant-select-in-form-item css-dev-only-do-not-override-byeoj0 ant-select-single ant-select-show-arrow">
                                <div className="ant-select-selector">
                                    <select
                                        value={formData.product_type_id}
                                        name="product_type_id"
                                        onChange={handleAddChange}
                                        style={{ border: 'none', outline: 'none', width: '100%' }}
                                    >
                                        <option value="" disabled defaultValue>
                                            Chọn danh mục
                                        </option>
                                        {listProductTypes.map((x) => (
                                            <option value={x.product_type_id} key={x.product_type_id}>
                                                {x.name_product_type}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </Form.Item>
                    </Col>
                    <Col xs={12}>
                        <Form.Item
                            style={{
                                width: 'calc(100% - 153px)',
                            }}
                            name="status"
                            label="Trạng thái"
                            required
                        >
                            <Select
                                labelInValue
                                defaultValue={'Chọn trạng thái'}
                                options={items2}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item label="Hình ảnh" required tooltip="Hình ảnh">
                    <Upload
                        name="upload"
                        action={'http://localhost:3000'}
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                        accept=".png, .jpg, .jpeg"
                        beforeUpload={(file) => {
                            console.log({ file });
                            return false;
                        }}
                        maxCount={1}
                    >
                        {fileList.length >= 2 ? null : uploadButton}
                    </Upload>
                    <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                        <img
                            alt="example"
                            style={{
                                width: '100%',
                            }}
                            src={previewImage}
                        />
                    </Modal>
                </Form.Item>
                <Form.Item label="Mô tả ngắn">
                    <TextArea rows={2} placeholder="Mô tả ngắn..." />
                </Form.Item>
                <Form.Item label="Mô tả chi tiết">
                    <TextArea rows={4} placeholder="Mô tả chi tiết..." />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        span: 16,
                        offset: 4,
                    }}
                >
                    <Button type="primary" style={{ width: '100%' }} onClick={handleSubmit}>
                        Cập nhật sản phẩm
                    </Button>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        span: 16,
                        offset: 4,
                    }}
                >
                    <Button
                        type="primary"
                        style={{ width: '100%' }}
                        onClick={(e) => props.onProductUpdated(null)}
                    >
                        Hủy
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default UpdateProduct;
