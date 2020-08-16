import React, { Component } from 'react';
import { observer } from 'mobx-react';
import rootStores from '../../../stores';
import { HOME_PAGE_SOTRE } from '../../../stores/Stores';

const limitValue = 12;
const homepageStore = rootStores[HOME_PAGE_SOTRE];
@observer
class AdikaGrid extends Component {
    selectGrid = (productsInRow) => {
        const rowsToDisplay = limitValue/productsInRow;
        const rowCount = rowsToDisplay % 1 === 0 ? rowsToDisplay : parseInt(rowsToDisplay) + 1; //return rows
        homepageStore.setGrid(rowCount)    
        homepageStore.setProductCountInRow(productsInRow)       
    }

    getSelectedClass = () => {
        const {gridkey} = this.props;
        const prodCountInRow = homepageStore.getProductCountInRow;
        if(gridkey === prodCountInRow) {
            return 'grid-selected';
        }
    }

    render(){
        const {classname,gridkey} = this.props;
        const selectedClass = this.getSelectedClass();
        return(
            <a onClick={() => this.selectGrid(gridkey)} className={`grid-view ${classname} ${selectedClass}`}/>
        )
    }
}

export default AdikaGrid;
