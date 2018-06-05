import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardBox from '../cardBox/CardBox';
import ChatInputBox from '../chatInputBox/ChatInputBox';
import MessagesBox from '../messagesBox/MessagesBox';

class VideoChat extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { userId } = this.props;
        return (
            <div className="video-chat">
                <CardBox className="d-flex flex-column p-3">
                    <MessagesBox userid={userId} />
                    <ChatInputBox />
                </CardBox>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userId: state.user.userDetail.userId,
    };
};
export default connect(mapStateToProps, null)(VideoChat);
