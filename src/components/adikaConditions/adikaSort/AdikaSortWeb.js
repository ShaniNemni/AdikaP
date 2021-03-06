import React,{useState} from 'react';
import './AdikaSort.scss';
import {SortOptionsList} from '../../../common/Lists';

const AdikaSortWeb = ({onSortSelected}) => {
    const renderOptions = () => {
        const options = SortOptionsList.map(sort => {
            return(
                <a onClick={() => onSortSelected(sort.sortID)} key={sort.sortID} className={'sort-option-title'}>{sort.sortName}</a>
            )
        })

        return(
            <div className={'sort-option-view'}>
                {options}
           </div>
        )
    }

    return(
        <div className={'sort-web-container'}>
            <div className={'modal-container'}>
                {renderOptions()}
            </div>
        </div>
    )
}

export default AdikaSortWeb;