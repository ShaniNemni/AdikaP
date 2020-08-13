
import React,{useState} from 'react';
import './DisplayConditions.scss';
import AdikaSort from '../../components/adikaConditions/adikaSort/AdikaSort';
import AdikaFilters from '../../components/adikaConditions/adikaFilters/AdikaFilters';
import AdikaGrids from '../../components/adikaConditions/adikaGrid/AdikaGrids';

const DisplayConditions = ({toggleDivFilters}) => {
    return(
        <div className={'display-condition container'}>
                <div className={'row margin-vertical-10'}>
                    <div className={'col-4 col-lg-4 col-md-6'}>
                        <AdikaFilters toggleDivFilters={toggleDivFilters}/>
                    </div>
                    <div className={'col-4 col-lg-4 col-md-6'}>
                        <AdikaGrids/>
                    </div>
                    <div style={{display:'flex',justifyContent:'flex-end'}} className={'col-4 col-lg-4 col-md-6'}>
                        <AdikaSort/>
                    </div>
                </div>
                
        </div>
    )
}

export default DisplayConditions;