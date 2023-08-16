import { useState } from 'react';
import ProductShop from '../../Product/ProductShop';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

function Pagination({ itemsPerPage, products }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };
    return (
        <div className="shop-area text-align-center">
            <ProductShop products={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel={null}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={null}
                renderOnZeroPageCount={null}
                className="pagination mt-40"
            />
        </div>
    );
}

export default Pagination;
