import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../../../core/hooks/useFetch";


const PropertyChats = () => {
  const { officeId, propertyId } = useParams();
  const { data: chats } = useFetch(`/chats/property/${propertyId}`);

  return (
    <div>
      <h1>Chats for Property {propertyId}</h1>
      {chats.map((chat) => (
        <div key={chat._id}>
          <h2>Chat with User {chat.userId}</h2>
          {chat.messages.map((message, index) => (
            <div key={index}>
              <p>{message.userId === officeId ? "You" : "User"}: {message.message}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PropertyChats;
