//Layout
import AdminPage from '../../components/Layout/Admin';

//Pages
import QuanLyTaiKhoan from '../../components/Layout/Admin/QuanLyTaiKhoan';
import QuanLyPhanQuyen from '../../components/Layout/Admin/QuanLyPhanQuyen';
import QuanLyLoaiSanPham from '../../components/Layout/Admin/QuanLyLoaiSanPham';
import QuanLySanPham from '../../components/Layout/Admin/QuanLySanPham';
import QuanLyDanhGia from '../../components/Layout/Admin/QuanLyDanhGia';
import QuanLyTrangThaiDatHang from '../../components/Layout/Admin/QuanLyTrangThaiDatHang';

//Public Routes
const privateRoutes = [
    { path: '/quanlytaikhoan', component: QuanLyTaiKhoan, layout: AdminPage },
    { path: '/quanlyphanquyen', component: QuanLyPhanQuyen, layout: AdminPage },
    { path: '/quanlyloaisanpham', component: QuanLyLoaiSanPham, layout: AdminPage },
    { path: '/quanlysanpham', component: QuanLySanPham, layout: AdminPage },
    { path: '/quanlydanhgia', component: QuanLyDanhGia, layout: AdminPage },
    {
        path: '/quanlytrangthaidathang',
        component: QuanLyTrangThaiDatHang,
        layout: AdminPage,
    },
];

export { privateRoutes };
