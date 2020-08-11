
import React from 'react';
import './AdikaBadge.scss';
const AdikaBadge = ({title,color}) => {
    return(
        <div className='badge' style={{background:color}}>
            {title}
        </div>
    )
}

export default AdikaBadge;