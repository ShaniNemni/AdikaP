import React from 'react';
import './AdikaCover.scss';

const AdikaCover = ({title,description,imageClass}) => {
    return(
        <div className={'cover-image '+ imageClass}>
            <div className={'cover-background'}>
                <div className={'common-title-description'}>                     
                    <h1 className={'cover-title'}>{title}</h1>
                    <div className={'cover-description'}>{description}</div>
                </div>
            </div>
        </div>
    )
}

export default AdikaCover;