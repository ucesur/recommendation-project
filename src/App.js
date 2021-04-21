import logo from './logo.svg';
import './App.css';
import SearchPage from './components/SearchPage.js';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

import {config} from "./config.js"

function App() {
  // Initialize Firebase
  if (!firebase.apps.length) {
     firebase.initializeApp(config);
  }else {
     firebase.app(); // if already initialized, use that one
  }
  return (
    <div className="App">
      <SearchPage/>
    </div>
  );
}

export default App;
