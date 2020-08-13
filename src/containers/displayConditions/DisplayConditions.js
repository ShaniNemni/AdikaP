
import React,{useState} from 'react';
import './DisplayConditions.scss';
import AdikaSort from '../../components/adikaConditions/adikaSort/AdikaSort';
import AdikaFilters from '../../components/adikaConditions/adikaFilters/AdikaFilters';
import AdikaGrids from '../../components/adikaConditions/adikaGrid/AdikaGrids';

const DisplayConditions = () => {
    
    return(
        <div className={'display-condition container'}>
                <div className={'row margin-vertical-10'}>
                    <div className={'col-4'}>
                        <AdikaFilters/>
                    </div>
                    <div className={'col-4'}>
                        <AdikaGrids/>
                    </div>
                    <div className={'col-4'}>
                        <AdikaSort/>
                    </div>
                </div>
                
        </div>
    )
}

export default DisplayConditions;