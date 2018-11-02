import React,{Component} from 'react';
var firebase = require('firebase');
var uuid = require('uuid');

var config = {
   apiKey: "AIzaSyCROTE6e4_tV4s5ZqpNA96zwr9rEbczNjY",
    authDomain: "til-to-code.firebaseapp.com",
    databaseURL: "https://til-to-code.firebaseio.com",
    projectId: "til-to-code",
    storageBucket: "til-to-code.appspot.com",
    messagingSenderId: "762543403547"
  };
  var fire =  firebase.initializeApp(config);

export default fire;
