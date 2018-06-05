import React from 'react';
import { connect } from 'react-redux';
import CardBox from '../cardBox/CardBox';

const MessagesBox = ({ userId, messages }) => {
    return (
        <div className="message-box d-flex flex-column h-100 px-4 py-2">
            {messages.map((m, index) => {
                return (
                    <CardBox key={index} className={`mb-1 p-2 bg-white align-self-start ${m.fromId === userId ? 'ml-auto' : ''} ${index === 0 ? 'mt-auto' : ''}`}>
                        <div className="message-card-header font-weight-bold">{m.fromName}</div>
                        <div className="message-card-body">{m.message}</div>
                    </CardBox>
                );
            })}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        messages: state.chat.messages,
    };
};
export default connect(mapStateToProps, null)(MessagesBox);
