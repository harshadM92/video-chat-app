import React from 'react';
import { List, ListItem, ListItemText, Avatar, CircularProgress } from '@material-ui/core';
import { isArrayEmpty } from '../../utils/commonUtil';

const Sidebar = ({ friendsList, startChat }) => {
    if (isArrayEmpty(friendsList)) {
        return <div className="text-center"><CircularProgress size={60} thickness={7} /></div>;
    }
    return (
        <List>
            {friendsList.map((f, index) => (
                <ListItem key={index} dense button divider onClick={() => startChat(f.userId)}>
                    <Avatar alt="Remy Sharp">
                        <i className="fa fa-user" />
                    </Avatar>
                    <ListItemText primary={f.firstName} />
                </ListItem>
            ))}
        </List>
    );
};
export default Sidebar;
