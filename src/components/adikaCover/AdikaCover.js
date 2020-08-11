import React from 'react';
import './AdikaCover.scss';

const AdikaCover = ({title,description,imageClass}) => {
    return(
            <div className={'cover-image '+ imageClass}>
                <div className={'cover-title common-title-description'}>{title}</div>
                <div className={'cover-description common-title-description'}>{description}</div>
            </div>
    )
}

export default AdikaCover;