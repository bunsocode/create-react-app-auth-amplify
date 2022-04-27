import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Configure Amplify
import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports'

//Check if you are in localhost or production
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
  
      window.location.hostname === '[::1]' ||
      // 127.0.0.0/8 are considered localhost for IPv4.
  
      window.location.hostname.match(
        /^127(?:.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  )
  const signInURI = awsExports.oauth.redirectSignIn.split(',')
  const signOutURI = awsExports.oauth.redirectSignOut.split(',')
  
  if (isLocalhost) {
    awsExports.oauth.redirectSignIn = signInURI[0]
    awsExports.oauth.redirectSignOut = signOutURI[0]
  } else if (window.location.hostname === 'https://master.d2m4nju9cc9irr.amplifyapp.com/' // Add Your Application Domain here. For Example:
    // https://{env}.{appID}.amplifyapp.com/
  ) {
    awsExports.oauth.redirectSignIn = signInURI[1]
    awsExports.oauth.redirectSignOut = signOutURI[1]
  } else {
    console.alert('This is not possible')
  
  }
  //Check if you are in localhost or production
  //Then Configure Resources
  Amplify.configure(awsExports)
  
 



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
