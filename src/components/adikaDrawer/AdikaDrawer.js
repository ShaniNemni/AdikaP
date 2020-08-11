import React from 'react';
import SwipeableDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './AdikaDrawer.scss';
 
const AdikaDrawer = (props) => {
    return(
        <SwipeableDrawer
            open = {props.drawerPressed}
            anchor = {props.drawerPosition}
            onClose = {props.toggleDrawer}
        >
            {props.children}
       </SwipeableDrawer>
    )
}

export default AdikaDrawer;