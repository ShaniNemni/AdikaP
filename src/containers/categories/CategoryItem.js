import React from 'react';


const CategoryItem = ({categoryName,categoryID}) => {
    return(
          <a className={'category-item'}>{categoryName}</a>
    )
}

export default CategoryItem;