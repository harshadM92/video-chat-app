import { pushToChatting } from './firebaseUtil';

const Peer = require('simple-peer');

let peer = '';
export const createNewPeer = (initiator) => {
    peer = new Peer({ initiator, trickle: false });
    return peer;
}
export const getPeer = () => {
    return peer;
}
export const initiateChat = (initiator, chatToUserId) => {
    createNewPeer(initiator);
    debugger
    peer.on('signal', (data) => {
        debugger
        console.log('SIGNAL', JSON.stringify(data));
        pushToChatting(chatToUserId, JSON.stringify(data));
    });
    peer.on('connect', () => {
        console.log('CONNECT');
        debugger
    });
}