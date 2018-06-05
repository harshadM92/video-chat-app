import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import Title from '../title/Title';
import CardBox from '../cardBox/CardBox';
import InputBox from '../inputs/InputBox';
import { navigateToUrl, isObjectEmpty } from '../../utils/commonUtil';
import { getUserRef, serachInsideUserRef } from '../../utils/firebaseUtil';
import * as UserActions from '../../redux/actions/UserActions';
import AlertText from '../alertText/AlertText';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: '',
            cPassword: '',
            firstName: '',
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.signUp = this.signUp.bind(this);
    }
    async signUp() {
        const userRef = getUserRef();
        const { userId, password, cPassword, firstName } = this.state;
        const userSnapshot = await serachInsideUserRef('userId', userId);
        if (!userId || !password || !cPassword) {
            // this.setState({ showMandatory: true });
            return;
        }
        if (isObjectEmpty(userSnapshot)) {
            const userPushRef = userRef.push();
            userPushRef.set({
                userId,
                password,
                firstName,
            });
            navigateToUrl('/login');
        } else {
            // this.setState({ showAlert: true, alertText: 'User Name Already Exist', alertType: 'danger' });
        }
    }
    onInputChange(e) {
        const change = {
            [e.target.name]: e.target.value,
        };
        if (change.userId && this.state.showAlert) {
            // this.setState({ showAlert: false });
        }
        if (this.state.showMandatory) {
            // this.setState({ showMandatory: false });
        }
        this.setState(change);
    }
    render() {
        const { userId, password, cPassword, firstName } = this.state;
        return (
            <Fragment>
                <Title title="Sing Up Form" />
                <CardBox className="p-2 my-3">
                    <AlertText />
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
                            id="firstName"
                            label="First Name"
                            value={firstName}
                            onChange={this.onInputChange}
                            margin="normal"
                            name="firstName"
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
                        <TextField
                            id="cPassword"
                            label="Password"
                            value={cPassword}
                            onChange={this.onInputChange}
                            margin="normal"
                            name="cPassword"
                            type="password"
                        />
                        <Button variant="raised" color="primary" onClick={this.signUp}>Sign up</Button>
                        <Button variant="outlined" color="primary" className="my-2" onClick={() => navigateToUrl('/login')}>Login</Button>
                    </div>
                </CardBox>
            </Fragment>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(UserActions, dispatch);
}
export default connect(null, mapDispatchToProps)(SignUp);