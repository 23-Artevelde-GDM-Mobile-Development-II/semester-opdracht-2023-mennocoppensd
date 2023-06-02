import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../../../../core/hooks/useFetch";

const EstateOfficeChatPage = () => {
  const { officeId } = useParams();
  const { data: chats, refetch } = useFetch(`/chat/${officeId}`);

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 3000); // refetch every 3 seconds

    return () => clearInterval(intervalId);
  }, [refetch]);

  return (
    <div>
      <h1>Chats</h1>
      {chats.map((chat) => (
        <div key={chat.propertyId}>
          <h2>Chat for property {chat.propertyId}</h2>
          {chat.messages.map((message, index) => (
            <div key={index}>
              <p>
                {message.userId === officeId ? "You" : "User"}:{" "}
                {message.message}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EstateOfficeChatPage;
