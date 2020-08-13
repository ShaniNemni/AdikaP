import React from 'react';


const CategoryItem = ({categoryName,categoryID,onCategorySelected}) => {
    return(
        <li onClick={() => onCategorySelected(categoryID)} className={`col-12 col-md-2`} key={categoryID}>
            <a className={'category-name'}>{categoryName}</a>
        </li>
    )
}

export default CategoryItem;