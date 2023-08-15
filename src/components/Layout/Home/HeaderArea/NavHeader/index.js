import ButtonComponent from '../../../Components/Button';

function NavHeader() {
    const items = [
        {
            key: '1',
            label: 'Trang chủ',
            to: '/',
        },
        {
            key: '2',
            label: 'Giới thiệu',
            to: '/about',
        },
        {
            key: '3',
            label: 'Sản phẩm',
            to: '/shop',
        },
        {
            key: '4',
            label: 'Tin tức',
            to: '/blog',
        },
        {
            key: '5',
            label: 'Liên hệ',
            to: '/contact',
        },
    ];
    return (
        <div className="nav">
            <nav>
                <ul className="d-flex">
                    {items.map((item) => (
                        <li key={item.key}>
                            <ButtonComponent to={item.to} primaryHover className="lh-74">
                                {item.label}
                            </ButtonComponent>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default NavHeader;
