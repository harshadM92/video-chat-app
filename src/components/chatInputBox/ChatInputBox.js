import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardBox from '../cardBox/CardBox';
import InputBox from '../inputs/InputBox';
import * as VideoChatActions from '../../redux/actions/VideoChatActions';
import RoundedButton from '../roundedButton/RoundedButton';
import { Button, TextField } from '@material-ui/core';

class ChatInputBox extends Component {
    constructor(props) {
        super(props);
        this.state = { chatInput: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.pushMessage = this.pushMessage.bind(this);
    }
    onInputChange(e) {
        const change = {
            [e.target.name]: e.target.value,
        };
        this.setState(change);
    }
    pushMessage() {
        const message = {
            fromId: 'R123',
            toId: 'H123',
            fromName: 'Rakesh',
            toName: 'Harshad',
            message: this.state.chatInput,
            time: new Date(),
        };
        this.props.pushToMessages(message);
        this.setState({ chatInput: '' });
    }
    render() {
        const { chatInput } = this.state;
        return (
            <CardBox className="mt-auto p-3">
                <div className="input-row row">
                    <div className="col-10">
                        <TextField fullWidth
                            id="chatInput"
                            label="Type here"
                            value={chatInput}
                            onChange={this.onInputChange}
                            margin="normal"
                            name="chatInput"
                        />
                    </div>
                    <div className="col-2 align-self-center">
                        <Button variant="raised" color="primary" onClick={this.pushMessage}>
                            <span className="pr-2">Send</span>
                            <i className="fa fa-location-arrow" />
                        </Button>
                    </div>
                </div>
            </CardBox>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(VideoChatActions, dispatch);
};
export default connect(null, mapDispatchToProps)(ChatInputBox);
