import React,{useState} from 'react';
import './AdikaConditions.scss';
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io';
import AdikaDrawer from '../adikaDrawer/AdikaDrawer';
import AdikaSortDrawerMobile from './AdikaSortDrawerMobile';

const SORT_BY = 'Sort by';
const AdikaSort = () => {
    const [sortByPressed,setSortByPressed] = useState(false);

    const toggleSortBy = () => {
       const sortByNewValue = !sortByPressed; 
       setSortByPressed(sortByNewValue);
    }

    const displayIcon = () => {
        if(sortByPressed) {
            return <IoIosArrowUp/>
        }

        return <IoIosArrowDown/>
    }

    return(
        <div className='sort-by-container'>
            <div className={'mobile-only'}>
                <div onClick={toggleSortBy}>
                    <span>{SORT_BY}</span>
                    {displayIcon()}
                </div>
                <AdikaDrawer drawerPressed={sortByPressed} toggleDrawer={toggleSortBy} drawerPosition={'bottom'}>
                        <AdikaSortDrawerMobile/>
                    </AdikaDrawer>
            </div>
        </div>
    )
}

export default AdikaSort;