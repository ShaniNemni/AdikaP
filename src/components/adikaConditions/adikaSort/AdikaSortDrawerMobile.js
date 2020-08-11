import React from 'react';
import {SortOptionsList} from '../../common/SortOptionsList';

const SORT_BY = 'SORT BY';
const AdikaSortDrawerMobile = () => {

    const renderOptions = () => {
        const options = SortOptionsList.map(sort => {
            return(
                <a className={'sort-option-title'}>{sort.sortName}</a>
            )
        })

        return(
            <div className={'sort-option-view'}>
                {options}
           </div>
        )
    }

    return(
        <div className={'sort-drawer-container'}>
            <div className={'sort-options-title'}>
                 <a className={'sort-title'}>{SORT_BY}</a>
            </div>
            <div className={'sort-options-view'}>
                {renderOptions()}
            </div>
        </div>
    )
}

export default AdikaSortDrawerMobile;