import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../../../../core/hooks/useFetch";
import useMutation from "../../../../../core/hooks/useMutation";

import "./UserChat.css";
import Header from "../../../../Design/Public/Header/Header";



const UserChat = ({ userId }) => {
  const { officeId, propertyId } = useParams();

  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  
  const { data: property, isLoading, error } = useFetch(`/properties/${propertyId}`);

  console.log(property); // log the error variable


  // useEffect(() => {
  //   const fetchChatHistory = async () => {
  //     const response = await fetch(`/chat/${officeId}/${propertyId}`);
  //     const data = await response.json();
  //     setChatHistory(data);
  //   };
  //   fetchChatHistory();
  // }, [officeId, propertyId]);


  const { mutate } = useMutation();

  const sendMessage = () => {
    const messageData = {
      sender_id: userId,
      receiver_id: property.estateOffice, // assuming estateOffice is an object with _id field
      propertyId: propertyId,
      message,
      read: false
    };

    mutate(`/chat/${officeId}/${propertyId}`, { method: 'POST', data: messageData }, {
      onSuccess: () => {
        setChatHistory(prevState => [...prevState, { userId, message }]);
        setMessage("");
      },
      onError: (error) => { console.error(error); },
    });
  };
  return (
    <>
    <div className="chat-container">
    <div className="chat-header">
    <Link to="/public/">&lt; Back</Link>
      <h1>Chat with {propertyId}</h1>
    </div>
    {/* <h1>Chat with {property.estateOffice} for {property.type} in {property.street} {property.number}, {property.municipality}</h1> */}
    <div className="chat-messages">
    {chatHistory.map((chat, index) => (
      <div key={index} className={`chat-message ${chat.userId === userId ? "user-message" : "estate-message"}`}>
        <p>{chat.userId === userId ? "You" : "Estate Office"}: {chat.message}</p>
      </div>
    ))}
<textarea className="chat-textarea" value={message} onChange={(e) => setMessage(e.target.value)} />
<button className="chat-send-button" onClick={sendMessage}>Send</button>
  </div>
  </div>
  </>
);

};

export default UserChat;
