import { useState } from 'react';
import { Form, Input, Row, Col, Button, Modal, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

function CreateProduct() {
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
            <Form
                layout="horizontal"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 16,
                }}
            >
                <Form.Item name="" label="Tên sản phẩm" required tooltip="Tên sản phẩm">
                    <Input placeholder="Nhập tên sản phẩm..." />
                </Form.Item>
                <Form.Item name="" label="Giá sản phẩm" required tooltip="Giá sản phẩm">
                    <Input placeholder="Nhập giá sản phẩm..." />
                </Form.Item>
                <Form.Item name="" label="Số lượng" required tooltip="Số lượng">
                    <Input placeholder="Nhập số lượng..." />
                </Form.Item>
                <Form.Item name="" label="Giảm giá" required tooltip="Giảm giá">
                    <Input placeholder="Nhập giảm giá..." />
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
                            name=""
                            label="Danh mục"
                            required
                        >
                            <Input placeholder="Chọn danh mục..." />
                        </Form.Item>
                    </Col>
                    <Col xs={12}>
                        <Form.Item
                            style={{
                                width: 'calc(100% - 153px)',
                            }}
                            name=""
                            label="Trạng thái"
                            required
                        >
                            <Input placeholder="Chọn trạng thái..." />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item name="" label="Hình ảnh" required tooltip="Hình ảnh">
                    {/* <Input placeholder="Nhập tên sản phẩm..." /> */}
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
                <Form.Item name="" label="Mô tả ngắn" required>
                    <TextArea rows={2} placeholder="Mô tả ngắn..." />
                </Form.Item>
                <Form.Item name="" label="Mô tả chi tiết" required>
                    <TextArea rows={4} placeholder="Mô tả chi tiết..." />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        span: 16,
                        offset: 4,
                    }}
                >
                    <Button type="primary" style={{ width: '100%' }}>
                        Thêm mới sản phẩm
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default CreateProduct;
