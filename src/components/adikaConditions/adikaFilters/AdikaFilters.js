import React,{useState} from 'react';
import './AdikaFilters.scss';
import {FaSortAlphaUpAlt} from 'react-icons/fa';
import {MdClose} from 'react-icons/md';

const FILTER = 'Filter';
const AdikaFilters = () => {
    const [pressedFilterdMobile,setMobilePressed] = useState(false);
    const [pressedFilterdWeb,setWebPressed] = useState(false);

    const toggleMobileFilter = () => {
        const filterMobilePressedValue = !pressedFilterdMobile;
        setMobilePressed(filterMobilePressedValue);
    }

    const toggleWebFilter = () => {
        const filterWebPressedValue = !pressedFilterdWeb;
        setMobilePressed(filterWebPressedValue);
    }

    const mobileIconToDisplay = () => {
        if(pressedFilterdMobile) {
            return <MdClose/>
        }
        return <FaSortAlphaUpAlt/>;
    }

    return(
        <div className={'adika-filter-container'}>
            <div className={'mobile-only'}>
                <div className={'icon-title-view'} onClick={toggleMobileFilter}>
                   {mobileIconToDisplay()}
                  <a className={'filter-title'}>{FILTER}</a>  
                </div>
            </div>
            <div className={'desktop-only'}>
                <div onClick={toggleWebFilter} className={'icon-title-view'}>
                    <FaSortAlphaUpAlt/>
                    <a className={'filter-title'}>{FILTER}</a>  
                </div>
            </div>
        </div>
    )
}

export default AdikaFilters;