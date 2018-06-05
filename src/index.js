import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import VideoChatStore from './redux/VideoChatStore';
import history from './utils/history';
import { Snackbar } from 'react-redux-snackbar';

const config = {
    apiKey: "AIzaSyDwyAf4Iq_WweT_dKZv03g1Hgk7V-Ijk5g",
    authDomain: "video-chat-app-95732.firebaseapp.com",
    databaseURL: "https://video-chat-app-95732.firebaseio.com",
    projectId: "video-chat-app-95732",
    storageBucket: "video-chat-app-95732.appspot.com",
    messagingSenderId: "99827676899",
}
firebase.initializeApp(config);

const Routes = () => {
    return (
        <Provider store={VideoChatStore}>
            <Router history={history}>
                <Switch>
                    <Route component={App} />
                </Switch>
            </Router>
        </Provider>
    );
}

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();

