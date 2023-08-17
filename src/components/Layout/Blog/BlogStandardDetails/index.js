import { useParams } from 'react-router-dom';
import { Comment } from '@ant-design/compatible';
import { Input } from 'antd';

import './BlogStandardDetails.css';
import blogs from '../Blog';
import ButtonComponent from '../../Components/Button';

const { TextArea } = Input;

function BlogStandardDetails() {
    const { id } = useParams();
    const blog = blogs.find((p) => p.id === parseInt(id));
    if (!blog) {
        return (
            <div>
                <h1>Blog có id {id} không tồn tại</h1>
            </div>
        );
    }
    const comment = {
        id: 1,
        author: 'Lmao Trạch Đông',
        avatar: '/assets/img/blog/human-blog.png',
        content: 'Ăn chay tốt cho sức khỏe',
        datetime: '5 July, 2023',
    };
    const reply = {
        id: 1,
        author: 'Vịt Trump',
        avatar: '/assets/img/blog/human-blog.png',
        content: 'Đúng vậy',
        datetime: '12 July, 2023',
    };
    return (
        <div className="blog-details-area py-100 text-align-center">
            <div className="container">
                <div className="blog-details-wrap">
                    <h5>Tin tức</h5>
                    <h1>{blog.title}</h1>
                    <h5 className="mb-10">{blog.poster}</h5>
                    <div className="blog-details-img">
                        <img src={blog.img} alt="" />
                    </div>
                    <div className="blog-details-content my-40">{blog.content}</div>
                    <div className="blog-details-comments text-align-left pb-20">
                        <h4 className="mb-10">BÌNH LUẬN</h4>
                        <Comment
                            author={<p>{comment.author}</p>}
                            avatar={<img src={comment.avatar} alt="" />}
                            content={<p>{comment.content}</p>}
                            datetime={<span>{comment.datetime}</span>}
                        >
                            <Comment
                                author={<p>{reply.author}</p>}
                                avatar={<img src={reply.avatar} alt="" />}
                                content={<p>{reply.content}</p>}
                                datetime={<span>{reply.datetime}</span>}
                            ></Comment>
                        </Comment>
                    </div>
                    <div className="blog-details-reply text-align-left">
                        <h4>ĐĂNG BÌNH LUẬN</h4>
                        <TextArea
                            rows={8}
                            placeholder="Nhập nội dung"
                            style={{ padding: '20px', fontSize: '16px' }}
                            className="my-40"
                        />
                        <ButtonComponent className="btn-submit">Submit</ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogStandardDetails;
