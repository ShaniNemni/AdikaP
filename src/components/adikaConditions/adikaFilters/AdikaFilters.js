import React,{useState} from 'react';
import {FilterOptionsList} from '../../../common/Lists';
import './AdikaFilters.scss';
import {isMobile} from 'react-device-detect';
import {FaSortAlphaUpAlt} from 'react-icons/fa';
import {MdClose} from 'react-icons/md';
import AdikaDrawer from '../../adikaDrawer/AdikaDrawer';
import AdikaFilter from './AdikaFilter';
import rootStores from '../../../stores/index';
import {HOME_PAGE_SOTRE} from '../../../stores/Stores';

const homePageStore = rootStores[HOME_PAGE_SOTRE];
const FILTER = 'Filter';
const AdikaFilters = ({toggleDivFilters}) => {
    const [filterPressed,setFilterPressed] = useState(false);

    const toggleFilter = () => {
        const filterPressedValue = !filterPressed;
        setFilterPressed(filterPressedValue);
        toggleDivFilters();
    }

    const iconToDisplay = () => {
        if(!isMobile && filterPressed) {
            return <MdClose/>
        }
        
        return <FaSortAlphaUpAlt className={'icon-filter'}/>;
    }

    const onSelectedFilter = (filterKey,filterCondition) => {
        toggleFilter();
        homePageStore.setFilterCondition(filterKey,filterCondition);
    }

    const renderOptions = () => {
        const options = FilterOptionsList.map(filter => {
            const filter_key = filter.filterType;
            const filter_name = filter.filterName;
            const values = filter.filterOptions;
            const filterByType = values.map(option => {
                return <AdikaFilter onSelectedFilter={onSelectedFilter} key={option} filterKey={filter_key} option={option}/>
            })

            return(
                <div key={filter_key}  className={'col-3 col-md-3 filters-view'}>
                    <h1 className={'filter-key'}>{filter_name}</h1>
                    <ul className={'filter-block'}>
                        {filterByType}
                    </ul>
                </div>
            ) 

        })

        return options;
    }

    const closeDrawer = () => {
        setFilterPressed(false);
    }

    const renderByPlatform =() => {
        const displayFilterOptionsClassname = filterPressed ? '' : 'display-filters-close';

        if(isMobile) {
            return(
                <AdikaDrawer drawerPressed={filterPressed} drawerPosition={'left'} toggleDrawer={toggleFilter}>
                    <div className={'filter-view'}>
                        <h1 className={'filter-title-drawer'}><MdClose onClick={closeDrawer} className={'filter-md-close'}/>{FILTER}</h1>
                    </div>
                        {renderOptions()}
                </AdikaDrawer>
            )
        }
        return(
          <div className={displayFilterOptionsClassname  + ' container' + ' filter-menu'}>
                <div className={'row'}>
                        {renderOptions()}
                </div>
           </div>
        )
    }

    return(
        <div className={'adika-filter-container'}>
            <div className={'icon-title-view margin-horizontal-5'} onClick={toggleFilter}>
                <span className={'filter-title'}>{iconToDisplay()}{ FILTER}</span>
            </div>
             {renderByPlatform()}
        </div>
    )
}

export default AdikaFilters;