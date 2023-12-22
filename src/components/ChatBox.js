import React from 'react';

import { useEffect, useRef, useState } from 'react';
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from 'firebase/firestore';
import { db } from '../firebase';
import Message from './Message';
import SendMessage from './SendMessage';

import Message from './Message';
import SendMessage from './SendMessage';

const ChatBox = () => {

  const [messages, setMessages] = useState([]);
  const scroll = useRef();


  // a Firebase query that queries our database looking for a message collection. It then orders the documents in the collection based on the createdAt key, and returns a maximum of 50 documents (messages saved).
  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('createdAt', 'desc'),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe;
  }, []);
  return (
    <main className='chat-box'>
      <div className='messages-wrapper'>
        {/* <Message /> */}
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
      {/* <SendMessage /> */}
    </main>
  );
};

export default ChatBox;
