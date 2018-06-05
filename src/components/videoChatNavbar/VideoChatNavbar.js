import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Divider } from '@material-ui/core';
import customHistory from '../../utils/history';
import { navigateToUrl, clearLocalStorage } from '../../utils/commonUtil';

class VideoChatNavbar extends Component {
    state = {
        auth: true,
        anchorEl: null,
    };
    handleChange = (event, checked) => {
        this.setState({ auth: checked });
    };
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleLogout = () => {
        this.setState({ anchorEl: null });
        clearLocalStorage();
        navigateToUrl('/login');
    };
    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className="mb-2">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            <span>Video Chat App</span>
                        </Typography>
                        <div className="ml-auto">
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : null}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <i className="fa fa-user" />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem>Profile</MenuItem>
                                <Divider />
                                <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default VideoChatNavbar;
