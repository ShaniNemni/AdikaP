import React from 'react';
import SwipeableDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './AdikaDrawer.scss';
 
const AdikaDrawer = ({drawerPressed,drawerPosition,toggleDrawer}) => {
    return(
        <SwipeableDrawer
            open = {drawerPressed}
            anchor = {drawerPosition}
            onClose = {toggleDrawer}
        >
        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
       </SwipeableDrawer>
    )
}

export default AdikaDrawer;