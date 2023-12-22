import React, { useState } from 'react';
import GoogleSignin from '../img/btn_google_signin_dark_pressed_web.png';

import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const NavBar = () => {
  // const [user, setUser] = useState(false);
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    // setUser(true);
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    //In the googleSignIn function, we let Firebase know that the user wants to sign in with Google using the GoogleAuthProvider(). It also redirects them to Google’s sign-in page.
  };

  const signOut = () => {
    // setUser(false);
    auth.signOut();
  };

  return (
    <nav className='nav-bar'>
      <h1>React Chat</h1>
      {user ? (
        <button onClick={signOut} className='sign-out' type='button'>
          Sign Out
        </button>
      ) : (
        <button className='sign-in'>
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt='sign in with google'
            type='button'
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
