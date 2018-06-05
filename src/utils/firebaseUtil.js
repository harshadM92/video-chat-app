import * as firebase from 'firebase';
import { getLocalStorage, getUserId } from './commonUtil';

export const getUserRef = () => {
    return firebase.database().ref().child('Users');
}
export const serachInsideUserRef = async (key, value) => {
    const serachInUserPromise = getUserRef().orderByChild(key).equalTo(value);
    const snapshot = await serachInUserPromise.once("value");
    let returnValue = false;
    if (snapshot.val()) {
        returnValue = snapshot;
    }
    return returnValue;
}
export const getFriendsList = async () => {
    const friendList = [];
    const userSnapshot = await getUserRef().once("value");
    if (userSnapshot.val()) {
        userSnapshot.forEach((u) => {
            const userObj = { ...u.val() };
            delete userObj.password;
            friendList.push(userObj);
        });
    }
    return friendList;
}
export const getChattingRef = () => {
    return firebase.database().ref().child('Chatting');
}
export const pushToChatting = (chatToUserId, data) => {
    const chattingRef = getChattingRef();
    const userId = getUserId();
    const chattingPushRef = chattingRef.push();
    const chattingObj = {
        [userId]: data,
    }
    chattingPushRef.set({
        [chatToUserId]: chattingObj,
    });
}
export const watchChattingObj = () => {
    const userId = getUserId();
    debugger
    if (!userId) {
        debugger
    }
    const chattingRef = getChattingRef();
    const chattingPromise = chattingRef.orderByChild(userId).equalTo(userId);
    debugger
    chattingPromise.on("value", (snapshot) => {
        debugger
        if (snapshot.val()) {
            console.log(snapshot.val());
        }
    });
}