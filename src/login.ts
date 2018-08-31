// Login Constants.
// This file contains all your Firebase settings, and app routes.
// It's important to set in your Firebase, Facebook, and Google app credentials here.
// If you have a different view for the homePage, trialPage, and verificationPage
// You can import them here and set them accordingly.
// If you want to disable emailVerification, simply set it to false.

import { TabsPage } from './pages/tabs/tabs';
import { VerificationPage } from './pages/verification/verification';
import { TrialPage } from './pages/trial/trial';
import { LoginPage } from './pages/login/login';

export namespace Login {
  // Get your Firebase app's config on your Firebase console. "Add Firebase to your web app".
  export const firebaseConfig = {

    apiKey: "AIzaSyDAuI-UR6s5h4NlGBq5pMok-uXST0SsMqQ",
    authDomain: "resolve-104f6.firebaseapp.com",
    databaseURL: "https://resolve-104f6.firebaseio.com",
    projectId: "resolve-104f6",
    storageBucket: "resolve-104f6.appspot.com",
    messagingSenderId: "292058966637"


  };
  // Get your Facebook App Id from your app at http://developers.facebook.com
  export const facebookAppId: string = ""; // 1025234637591184

  //  LIVE ACCOUNT MAKE SURE TO GET THE client_id OF client_type 3 and NOT client_type 1!!!
  // export const googleClientId: string ="277373824972-lbl3fm2n204a3oreegisp5an1qko1fm6.apps.googleusercontent.com"

  // TESTing account
  // export const googleClientId: string ="854823107381-k0er0frh6q3s7msa4o2ovk14v89tj13h.apps.googleusercontent.com"
  export const googleClientId: string = ""

  // Set in your appropriate Login routes, don't forget to import the pages on app.module.ts
  export const homePage = TabsPage;
  export const verificationPage = VerificationPage;
  export const trialPage = TrialPage;
  export const loginpage = LoginPage;
  // Set whether emailVerification is enabled or not.
  export const emailVerification: boolean = true;
}
