import React,{useState} from 'react';
import './Categories.scss';
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io';
import CategoryItem from './CategoryItem';

const CATEGORIES_LIST = [{name:'first Category',categoryID:1},{name:'second Category',categoryID:2},{name:'third Category',categoryID:3},{name:'four Category',categoryID:4},{name:'five Category',categoryID:5},{name:'six Category',categoryID:6}]
const CategoriesList = () => {
    const [categoriesPressed,setCategroiesPressed] = useState(false);

    const toggleCategories = () => {
        const categoriesPressedNewValue = !categoriesPressed; 
        setCategroiesPressed(categoriesPressedNewValue);
    }

    const displayIcon = () => {
        if(categoriesPressed) {
            return <IoIosArrowUp/>
        }

        return <IoIosArrowDown/>
    }

    const renderCategories = () => {
        const categories = CATEGORIES_LIST.map(category => 
            <li className={`col-12 col-md-2`} key={category.categoryID}>
                <a className={'category-name'}>{category.name}</a>
            </li>
        )
        
        return(
            <ul className={'row'}>
                {categories}
            </ul>
        )
    }
    
    
    const displayCategoriesClassname = categoriesPressed ? '' : 'display-categories-close';
    return(
        <div className={'categories-container'}>
            <hr/>
             <div className={'categories-title mobile-only'} onClick={toggleCategories}>{'Categories'} {displayIcon()} </div>
             <hr className={'mobile-only'}/>
             <div className={`container ${displayCategoriesClassname}`}>
                 {renderCategories()}
             </div>
        </div>
    )

}

export default CategoriesList;