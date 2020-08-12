import React from 'react';

const AdikaFilter = ({filterKey,option}) => {
    const renderByFilterType = () => {
        if(filterKey === 'BY COLOR') {
            return(
                <span style={{backgroundColor:option}} className={'colors-span'} />
            )
        }
    }

    return (
        <li className={'li-option'}>
            {renderByFilterType()}
            {option}
        </li>
    )
}

export default AdikaFilter;