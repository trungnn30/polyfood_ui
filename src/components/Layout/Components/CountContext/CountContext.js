import { createContext, useState } from 'react';

const CountContext = createContext();

function CountProvider({ children }) {
    var itemCart = JSON.parse(localStorage.getItem('carts') || '[]');
    var itemWishList = JSON.parse(localStorage.getItem('wishlist') || '[]');
    var itemCompare = JSON.parse(localStorage.getItem('compare') || '[]');
    const [countCart, setCountCart] = useState(itemCart.length || 0);
    const [countWishList, setCountWishList] = useState(itemWishList.length || 0);
    const [countCompare, setCountCompare] = useState(itemCompare.length || 0);
    const value = {
        countCart,
        setCountCart,
        countWishList,
        setCountWishList,
        countCompare,
        setCountCompare,
    };
    return <CountContext.Provider value={value}>{children}</CountContext.Provider>;
}

export { CountContext, CountProvider };
