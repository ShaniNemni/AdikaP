
import React,{useState} from 'react';
import './DisplayConditions.scss';
import AdikaSort from '../../components/adikaConditions/AdikaSort';

const DisplayConditions = () => {
    return(
        <div className={'display-condition-container'}>
            <div className={'col-4'}>
                <AdikaSort/>
            </div>
        </div>
    )
}

export default DisplayConditions;