import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sidebar from '../sidebar/Sidebar';
import VideoChat from '../videoChat/VideoChat';
import { getFriendsList, getChattingRef, watchChattingObj } from '../../utils/firebaseUtil';
import { navigateToUrl, getLocalStorage } from '../../utils/commonUtil';
import * as UserActions from '../../redux/actions/UserActions';
import { initiateChat } from '../../utils/simplePeerUtil';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friendsList: [],
        }
        const userDetail = getLocalStorage('userDetail');
        if (!userDetail) {
            navigateToUrl('/login');
        }
        this.getFriendsList(userDetail.userId);
        this.startChat = this.startChat.bind(this);
        watchChattingObj();
    }
    async getFriendsList(userId) {
        const userList = await getFriendsList();
        const friendsList = userList.filter(u => u.userId !== userId);
        this.setState({ friendsList });
    }
    startChat(chatToUserId) {
        // const chattingRef = getChattingRef();
        // const userDetail = getLocalStorage('userDetail');
        // const chattingPushRef = chattingRef.push();
        // chattingPushRef.set({
        //     [userDetail.userId]: chatToUserId,
        // });
        const initiator = true;
        initiateChat(initiator, chatToUserId);
        this.props.setChatToUser(chatToUserId);
    }
    render() {
        const { friendsList } = this.state;
        return (
            <div className="row no-gutters my-3" >
                <div className="col-3"><Sidebar friendsList={friendsList} startChat={this.startChat} /></div>
                <div className="col-9">
                    <Switch>
                        <Route path="/dashboard/videoChat" component={VideoChat} />
                    </Switch>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userId: state.user.userDetail.userId,
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(UserActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);