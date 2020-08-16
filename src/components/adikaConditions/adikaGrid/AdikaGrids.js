import React, { Component } from 'react';
import AdikaGrid from './AdikaGrid';
import './AdikaGrids.scss';
class AdikaGrids extends Component {
    render(){
        return(
            <div className={'grids-view'}>
                <AdikaGrid gridkey={1} classname={'view-1 mobile-only'}/>
                <AdikaGrid gridkey={2} classname={'view-6'}/>
                <AdikaGrid gridkey={3} classname={'view-4 desktop-only'}/>
                <AdikaGrid gridkey={4} classname={'view-3 desktop-only'}/>
                <AdikaGrid gridkey={5} classname={'view-5 desktop-only'}/>
                <AdikaGrid gridkey={6} classname={'view-2 desktop-only'}/>
            </div>
        )
    }
}

export default AdikaGrids;