//Layout
import AdminPage from '../../components/Layout/Admin';

//Pages
import DashBoard from '../../components/Layout/Admin/DashBoard';

//San pham
import QuanLySanPham from '../../components/Layout/Admin/QuanLySanPham';
import CreateProduct from '../../components/Layout/Admin/QuanLySanPham/CreateProduct';

//Loai san pham
import QuanLyLoaiSanPham from '../../components/Layout/Admin/QuanLyLoaiSanPham';
import CreateCate from '../../components/Layout/Admin/QuanLyLoaiSanPham/CreateCate';

//Tai khoan
import QuanLyTaiKhoan from '../../components/Layout/Admin/QuanLyTaiKhoan';

//Lien he
import QuanLyLienHe from '../../components/Layout/Admin/QuanLyLienHe';

//Ma giam gia
import QuanLyMaGiamGia from '../../components/Layout/Admin/QuanLyMaGiamGia';
import CreateVoucher from '../../components/Layout/Admin/QuanLyMaGiamGia/CreateVoucher';

//Don hang
import QuanLyDonHang from '../../components/Layout/Admin/QuanLyDonHang';
import OrdersPending from '../../components/Layout/Admin/QuanLyDonHang/OrdersPending';
import OrdersBeenConfirmed from '../../components/Layout/Admin/QuanLyDonHang/OrdersBeenConfirmed';
import OrdersCompleted from '../../components/Layout/Admin/QuanLyDonHang/OrdersCompleted';
import OrdersBeingDelivered from '../../components/Layout/Admin/QuanLyDonHang/OrdersBeingDelivered';
import OrdersCanceled from '../../components/Layout/Admin/QuanLyDonHang/OrdersCanceled';
import OrdersCanceledByCustomer from '../../components/Layout/Admin/QuanLyDonHang/OrdersCanceledByCustomer';

//Bai viet
import QuanLyBaiViet from '../../components/Layout/Admin/QuanLyBaiViet';
import CreateNews from '../../components/Layout/Admin/QuanLyBaiViet/CreateNews';

//Slides
import QuanLySlides from '../../components/Layout/Admin/QuanLySlides';
import CreateSlide from '../../components/Layout/Admin/QuanLySlides/CreateSlide';

//Public Routes
const privateRoutes = [
    { path: '/admin/dashboard', component: DashBoard, layout: AdminPage },

    //San pham
    { path: '/admin/products', component: QuanLySanPham, layout: AdminPage },
    { path: '/admin/products-add', component: CreateProduct, layout: AdminPage },

    //Danh muc
    { path: '/admin/categories', component: QuanLyLoaiSanPham, layout: AdminPage },
    { path: '/admin/categories-add', component: CreateCate, layout: AdminPage },

    //Tai khoan
    { path: '/admin/account', component: QuanLyTaiKhoan, layout: AdminPage },

    //Ma giam gia
    { path: '/admin/vouchers', component: QuanLyMaGiamGia, layout: AdminPage },
    { path: '/admin/vouchers-add', component: CreateVoucher, layout: AdminPage },

    //Lien he
    { path: '/admin/contacts', component: QuanLyLienHe, layout: AdminPage },

    //Tin tuc
    { path: '/admin/news', component: QuanLyBaiViet, layout: AdminPage },
    { path: '/admin/news-add', component: CreateNews, layout: AdminPage },

    //Don hang
    { path: '/admin/orders', component: QuanLyDonHang, layout: AdminPage },
    { path: '/admin/orders-pending', component: OrdersPending, layout: AdminPage },
    { path: '/admin/orders-been-confirmed', component: OrdersBeenConfirmed, layout: AdminPage },
    { path: '/admin/orders-being-delivered', component: OrdersBeingDelivered, layout: AdminPage },
    { path: '/admin/orders-completed', component: OrdersCompleted, layout: AdminPage },
    { path: '/admin/orders-canceled', component: OrdersCanceled, layout: AdminPage },
    {
        path: '/admin/orders-canceled-by-customer',
        component: OrdersCanceledByCustomer,
        layout: AdminPage,
    },

    //Slide
    { path: '/admin/slides', component: QuanLySlides, layout: AdminPage },
    { path: '/admin/slides-add', component: CreateSlide, layout: AdminPage },
];

export { privateRoutes };
