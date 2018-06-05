import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import CardBox from '../cardBox/CardBox';
import InputBox from '../inputs/InputBox';
import { getUserRef, serachInsideUserRef } from '../../utils/firebaseUtil';
import { navigateToUrl, isObjectEmpty, setToLocalStorage } from '../../utils/commonUtil';
import * as UserActions from '../../redux/actions/UserActions';
import Title from '../title/Title';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: '',
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.login = this.login.bind(this);
        this.loginSuccess = this.loginSuccess.bind(this);
        this.loginFailed = this.loginFailed.bind(this);
    }
    onInputChange(e) {
        const change = {
            [e.target.name]: e.target.value,
        };
        this.setState(change);
    }
    loginSuccess() {
        const userDetail = {
            userId: this.state.userId,
        }
        setToLocalStorage('userDetail', userDetail);
        navigateToUrl('/dashboard/videoChat');
    }
    loginFailed() {
        this.props.showSnackbar('loginFailed', 'Login Failed');
    }
    async login() {
        let isAuthSuccess = false;
        const { userId, password } = this.state;
        const snapshot = await serachInsideUserRef('userId', userId);
        let userFound = false;
        if (!isObjectEmpty(snapshot)) {
            snapshot.forEach((data) => {
                if (!userFound) {
                    const userObj = data.val();
                    isAuthSuccess = userObj.password === password;
                    if (isAuthSuccess) {
                        userFound = true;
                        this.loginSuccess();
                    }
                }
            });
        }
        if (!userFound) {
            this.loginFailed();
        }
    }
    render() {
        const { userId, password } = this.state;
        return (
            <Fragment>
                <Title title="Login Form" />
                <CardBox className="p-2 my-3">
                    <div className="d-flex flex-column align-items-start">
                        <TextField
                            id="userId"
                            label="User Name"
                            value={userId}
                            onChange={this.onInputChange}
                            margin="normal"
                            name="userId"
                        />
                        <TextField
                            id="password"
                            label="Password"
                            value={password}
                            onChange={this.onInputChange}
                            margin="normal"
                            name="password"
                            type="password"
                        />
                        <Button variant="raised" color="primary" onClick={this.login}>Login</Button>
                        <Button variant="outlined" color="primary" className="my-2" onClick={() => navigateToUrl('/signup')}>Create New Account</Button>
                    </div>
                </CardBox>
            </Fragment>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(UserActions, dispatch);
}
export default connect(null, mapDispatchToProps)(LoginForm);