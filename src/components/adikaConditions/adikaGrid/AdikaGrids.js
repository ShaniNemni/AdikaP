import React from 'react';
import {isMobile} from 'react-device-detect';
import AdikaGrid from './AdikaGrid';
import './AdikaGrids.scss';

const AdikaGrids = () => {
    const renderByPlatform = () => {
        if(isMobile) {
            return(
                <div className={'grids-view'}>
                   <AdikaGrid selected classname={'view-1'}/>
                   <AdikaGrid selected classname={'view-6'}/>
                </div>
            )
        }

        return(
            <div className={'grids-view'}>
                <AdikaGrid selected classname={'view-6'}/>
                <AdikaGrid classname={'view-4'}/>
                <AdikaGrid classname={'view-3'}/>
                <AdikaGrid classname={'view-5'}/>
                <AdikaGrid classname={'view-2'}/>
            </div>
        )
    } 
    return renderByPlatform()
}

export default AdikaGrids;