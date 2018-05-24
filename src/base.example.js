//Copty this file to 'base.js' and add your app defaults

import firebase from 'firebase/app'
import database from 'firebase/database'
import Rebase from 're-base'

// Initialize Firebase
const config = {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR AUTH DOMAIN",
    databaseURL: "YOUR DB URL",
    projectId: "YOUR PROJECT ID",
    storageBucket: "YOUR STORAGE BUCKET",
    messagingSenderId: "YOUR SENDER ID"
  }
  const app = firebase.initializeApp(config)
  const db = database(app)
  
  export default Rebase.createClass(db)