import React,{useState} from 'react';
import './Categories.scss';
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io';
import CategoryItem from './CategoryItem';

const CategoriesList = () => {
    const [categoriesPressed,setCategroiesPressed] = useState(false);

    const toggleCategories = () => {
        const categoriesPressedNewValue = !categoriesPressed; 
        setCategroiesPressed(categoriesPressedNewValue);
    }

    const displayIcon = () => {
        if(categoriesPressed) {
            return <IoIosArrowUp className={'arrow-icon'}/>
        }

        return <IoIosArrowDown className={'arrow-icon'}/>

    }

    const displayCategoriesClassname = categoriesPressed ? 'display-categories-open' : 'display-categories-close';
    return(
        <div className={'categories-container'}>
                <div className={'mobile-only mobile-container'}>
                    <div className={'title-and-icon'}>
                        <a className={'categories-title'} onClick={toggleCategories}>{'Categories'}</a>
                        {displayIcon()}
                    </div>

                    <div className={displayCategoriesClassname}>
                        <CategoryItem categoryName={'first Category'}/>
                        <CategoryItem categoryName={'second Category'}/>
                        <CategoryItem categoryName={'third Category'}/>
                        <CategoryItem categoryName={'four Category'}/>
                        <CategoryItem categoryName={'five Category'}/>
                        <CategoryItem categoryName={'six Category'}/>
                    </div>
                </div>
                <div className={'desktop-only desktop-container'}>
                        <CategoryItem categoryName={'first Category'}/>
                        <CategoryItem categoryName={'second Category'}/>
                        <CategoryItem categoryName={'third Category'}/>
                        <CategoryItem categoryName={'four Category'}/>
                        <CategoryItem categoryName={'five Category'}/>
                        <CategoryItem categoryName={'six Category'}/>
                </div>
        </div>
    )

}

export default CategoriesList;