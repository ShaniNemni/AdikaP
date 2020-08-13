import React from 'react';
import {Filters} from '../../../common/Lists';

const AdikaFilter = ({filterKey,option,onSelectedFilter}) => {
    const renderByFilterType = () => {
        if(filterKey === Filters.COLOR) {
            return(
                <span style={{backgroundColor:option}} className={'colors-span'} />
            )
        }
    }

    return (
        <li onClick={() => onSelectedFilter(filterKey,option)} className={'li-option'}>
            {renderByFilterType()}
            {option}
        </li>
    )
}

export default AdikaFilter;