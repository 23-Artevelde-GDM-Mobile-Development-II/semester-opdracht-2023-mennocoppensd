import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../../../core/hooks/useFetch";
import useMutation from "../../../../../core/hooks/useMutation";



const UserChat = ({ userId }) => {
  const { officeId, propertyId } = useParams();

  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const { data: property } = useFetch(`/properties/${propertyId}`);


  const { mutate } = useMutation();

  const sendMessage = () => {
    mutate(`/chat/${officeId}/${propertyId}`, { method: 'POST', data: { message, userId } }, {
      onSuccess: () => {
        setChatHistory(prevState => [...prevState, { userId, message }]);
        setMessage("");
      },
      onError: (error) => { console.error(error); },
    });
  };

  return (
    <div>
      <h1>Chat with Estate Office for {propertyId}</h1>
      {chatHistory.map((chat, index) => (
        <div key={index}>
          <p>{chat.userId === userId ? "You" : "Estate Office"}: {chat.message}</p>
        </div>
      ))}
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default UserChat;
