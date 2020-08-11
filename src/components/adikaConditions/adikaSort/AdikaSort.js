import React,{useState} from 'react';
import './AdikaConditions.scss';
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io';
import AdikaDrawer from '../../adikaDrawer/AdikaDrawer';
import AdikaSortDrawerMobile from '../AdikaSortDrawerMobile';

const SORT_BY = 'Sort by';
const AdikaSort = () => {
    const [sortByPressedMobile,setSortByMobilePressed] = useState(false);
    const [sortByPressedWeb,setSortByWebPressed] = useState(false);

    const toggleSortByMobile = () => {
       const sortByNewValue = !sortByPressedMobile; 
       setSortByMobilePressed(sortByNewValue);
    }

    const toggleSortByWeb = () => {
        const sortByNewValue = !sortByPressedWeb; 
        setSortByWebPressed(sortByNewValue);
     }
 
     const displayIcon = (sortByPressed) => {
        if(sortByPressed) {
            return <IoIosArrowUp className={'arrow-icon'}/>
        }
        
        return <IoIosArrowDown className={'arrow-icon'}/>
     }

    const displayIconMobile = () => {
        return displayIcon(sortByPressedMobile);
    }

    const displayIconWeb = () => {
        return displayIcon(sortByPressedWeb);
    }

    return(
        <div className='sort-by-container'>
            <div className={'mobile-only'}>
                <div onClick={toggleSortByMobile}>
                    <span className={'sort-by-title'}>{SORT_BY}</span>
                    {displayIconMobile()}
                </div>
                <AdikaDrawer drawerPressed={sortByPressedMobile} toggleDrawer={toggleSortByMobile} drawerPosition={'bottom'}>
                        <AdikaSortDrawerMobile/>
                    </AdikaDrawer>
            </div>
            <div className={'desktop-only'}>
                <div className={'sort-selector'} onClick={toggleSortByWeb}> 
                    <span class={'sort-by-title'}>{SORT_BY}</span>
                    {displayIconWeb()}
                </div>
            </div>
        </div>
    )
}

export default AdikaSort;