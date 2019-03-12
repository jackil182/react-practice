import React from 'react';
import Button from '../Button/Button';

import './PageMenu.css';

const PageMenu = ({currentPage, totalPages, prevPage, nextPage, updateCurrentPage, findPage}) => {
    return (
        <div className="PageMenu">
            <Button action={prevPage} className="btn btn-page" value="Previous Page" />
            <form className="PageMenu__form" onSubmit={findPage}>
                <label>Page 
                    <input type="text" name="currentPage" value={currentPage} onChange={updateCurrentPage} />
                    of {totalPages}
                </label>
            </form>
            <Button action={nextPage} className="btn btn-page" value="Next Page" />
        </div>
    );
};

export default PageMenu;