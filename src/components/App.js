import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../styles/App.css';
import VideoChatNavbar from './videoChatNavbar/VideoChatNavbar';
import VideoChat from './videoChat/VideoChat';
import Sidebar from './sidebar/Sidebar';
import Dashboard from './dashboard/Dashboard';
import LoginForm from './loginForm/LoginForm';
import Title from './title/Title';
import SignUp from './signUp/SignUp';
import { Snackbar } from 'react-redux-snackbar';
import { watchChattingObj } from '../utils/firebaseUtil';

const App = () => {
  // const initiateChat = () => {
  //   p = new Peer({ initiator: true, trickle: false });
  //   p.on('signal', (data) => {
  //     debugger
  //     console.log('SIGNAL', JSON.stringify(data));
  //   });
  //   p.on('connect', () => {
  //     console.log('CONNECT');
  //     debugger
  //     p.send(`whatever ${Math.random()}`);
  //   });
  //   p.on('data', (data) => {
  //     debugger
  //     console.log(`data: ${data}`);
  //   });
  //   debugger
  // };
  return (
    <div className="main-container container border border-primary h-100 mt-4">
      <VideoChatNavbar />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Snackbar />
    </div>
  );
}

export default App;

