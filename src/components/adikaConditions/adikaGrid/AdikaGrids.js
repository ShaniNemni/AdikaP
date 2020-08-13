import React from 'react';
import AdikaGrid from './AdikaGrid';
import './AdikaGrids.scss';

const AdikaGrids = () => {
        return(
            <div className={'grids-view'}>
                <AdikaGrid selected classname={'view-1 mobile-only'}/>
                <AdikaGrid selected classname={'view-6 '}/>
                <AdikaGrid classname={'view-4 desktop-only'}/>
                <AdikaGrid classname={'view-3 desktop-only'}/>
                <AdikaGrid classname={'view-5 desktop-only'}/>
                <AdikaGrid classname={'view-2 desktop-only'}/>
            </div>
        )
}

export default AdikaGrids;