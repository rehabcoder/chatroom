import React, { Component } from 'react';

import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';


var config = {
    apiKey: "AIzaSyBRSYiBnH3LW8tcZH6lLp7MJyTCNP390_M",
    authDomain: "chat-room-9b7a0.firebaseapp.com",
    databaseURL: "https://chat-room-9b7a0.firebaseio.com",
    projectId: "chat-room-9b7a0",
    storageBucket: "chat-room-9b7a0.appspot.com",
    messagingSenderId: "469871428280"
  };
  firebase.initializeApp(config);

  class App extends Component {
    render() {
      return (
        <div className='App'>
          <header>
            <h1>Chat!</h1>
        
          </header>

          <main>
            <RoomList firebase = {firebase} />
          </main>

        </div>
      );
    }
  }

  export default App;
