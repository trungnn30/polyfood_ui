import ButtonComponent from '../Components/Button';
import './BreadCrumb.css';

function BreadCrumbArea({ page }) {
    return (
        <div
            className="bread-crumb-area text-align-center py-35 mt-10"
            style={{
                background: '#f7f7f7',
            }}
        >
            <div className="container">
                <p>
                    <ButtonComponent primaryHover to={'/'} className="pl-0 pr-0">
                        TRANG CHỦ
                    </ButtonComponent>{' '}
                    / {page}
                </p>
            </div>
        </div>
    );
}

export default BreadCrumbArea;
