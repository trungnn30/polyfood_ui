import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import BlogPage from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import ContactPage from './pages/Contact';
import ShopPage from './pages/Shop';
import ShopDetails from './pages/ShopDetail';
import LoginRegisterPage from './pages/LoginRegister';
import CartPage from './pages/Cart';
import ComparePage from './pages/Compare';
import WishListPage from './pages/WishList';
import CheckOutPage from './pages/Checkout';
import ForgotPasswordPage from './pages/ForgotPassword';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/shop" element={<ShopPage />}></Route>
            <Route path="/shop/:id" element={<ShopDetails />}></Route>
            <Route path="/blog" element={<BlogPage />}></Route>
            <Route path="/blog/:id" element={<BlogDetail />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/compare" element={<ComparePage />}></Route>
            <Route path="/wishlist" element={<WishListPage />}></Route>
            <Route path="/checkout" element={<CheckOutPage />}></Route>
            <Route path="/login-register" element={<LoginRegisterPage />}></Route>
            <Route path="/forgot-password" element={<ForgotPasswordPage />}></Route>
        </Routes>
    );
}

export default App;
