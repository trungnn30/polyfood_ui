import { useState } from 'react';
import { Form, Input, Button, Modal, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

function CreateCate() {
    const iniData = Object.freeze({
        name_product_type: '',
        image_type_product: '',
    });
    const [formData, setFormData] = useState(iniData);
    const handleAddChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name_product_type: formData.name_product_type,
            image_type_product: formData.image_type_product,
        };

        const addCate = async () => {
            await fetch('https://localhost:7121/api/ProductType', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then((res) => {
                if (res.ok) {
                    message.success('Add successful');
                    setFormData(iniData);
                } else {
                    message.error('Something went wrong');
                }
            });
        };
        addCate();
    };
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
            <h1 className="text-align-center mb-20">THÊM DANH MỤC</h1>
            <Form
                layout="horizontal"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 16,
                }}
            >
                <Form.Item label="Tên danh mục" required tooltip="Tên danh mục">
                    <Input
                        placeholder="Nhập tên danh mục..."
                        name="name_product_type"
                        value={formData.name_product_type}
                        onChange={handleAddChange}
                    />
                </Form.Item>
                <Form.Item label="Hình ảnh" required tooltip="Hình ảnh">
                    <Upload
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
                <Form.Item
                    wrapperCol={{
                        span: 16,
                        offset: 4,
                    }}
                >
                    <Button type="primary" style={{ width: '100%' }} onClick={handleSubmit}>
                        Thêm mới danh mục
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default CreateCate;
