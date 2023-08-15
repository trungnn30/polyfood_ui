function Pagination({ itemsPerPage, totalItems, paginate }) {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumber.push(i);
    }
    return (
        <nav>
            {/* <ul className="pagination">
                {pageNumber.map((number) => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul> */}
        </nav>
    );
}

export default Pagination;
