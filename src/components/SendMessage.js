
import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const SendMessage = () => {
  const [message, setMessage] = useState('');

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === '') {
      alert('Enter valid message');
      return;
    }
    // unique id, full name, and photo URL --> of the user who is sending the message, who logged in --->  auth object - of user.
    const { uid, displayName, photoURL } = auth.currentUser;

    await addDoc(collection(db, 'messages'), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    //After this is done, it then resets the message state to an empty string.
    setMessage('');
  };

  return (
    <form onSubmit={(event) => sendMessage(event)} className='send-message'>
      <label htmlFor='messageInput' hidden>
        Enter Message
      </label>
      <input
        id='messageInput'
        name='messageInput'
        type='text'
        className='form-input__input'
        placeholder='type message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        // sets the message state to whatever the user types in.
      />
      <button type='submit'>Send</button>
    </form>
  );
};

export default SendMessage;
