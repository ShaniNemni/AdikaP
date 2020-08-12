
import React,{useState} from 'react';
import './DisplayConditions.scss';
import AdikaSort from '../../components/adikaConditions/adikaSort/AdikaSort';
import AdikaFilters from '../../components/adikaConditions/adikaFilters/AdikaFilters';

const DisplayConditions = () => {
    return(
        <div className={'display-condition-container'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-4'}>
                        <AdikaFilters/>
                    </div>
                    <div className={'col-4'}>
                        <AdikaSort/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayConditions;